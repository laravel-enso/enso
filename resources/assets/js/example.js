import Vue from 'vue';
import axios from 'axios';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faVuejs } from '@fortawesome/fontawesome-free-brands/shakable.es';
import VueTable from './components/enso/vuedatatable/VueTable.vue';
import Toastr from './components/enso/bulma/toastr';

import './modules/enso/mixins/errorHandler';

fontawesome.library.add(faVuejs);

Vue.component('fa', FontAwesomeIcon);

Vue.use(Toastr, {
    position: 'right',
    duration: 3000,
    closeButton: true,
});

window.axios = axios;

new Vue({
    data: {
        message: 'Hello Vue!',
    },

    components: { VueTable },

    methods: {
        __(val) {
            return val;
        },
        customRender(row, column) {
            switch (column.name) {
            case 'project':
                if (row.project === 'Enso SPA') return `<span class="tag is-table-tag is-success">${row[column.name]}</span>`;

                return row.project === 'AdminLTE'
                    ? `<span class="tag is-table-tag is-info">${row[column.name]}</span>`
                    : `<span class="tag is-table-tag is-danger">${row[column.name]}</span>`;
            default:
                this.$toastr.warning(`render for column ${column.name} is not defined.`);
                return this.row[column.name];
            }
        },
    },
}).$mount('#app');
