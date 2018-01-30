import Vue from 'vue';
import axios from 'axios';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faVuejs } from '@fortawesome/fontawesome-free-brands/shakable.es';
import { faCheck, faTimes } from '@fortawesome/fontawesome-free-solid/shakable.es';
import store from './store';
import VueTable from './components/enso/vuedatatable/VueTable.vue';
import VueFilter from './components/enso/bulma/VueFilter.vue';
import VueSelectFilter from './components/enso/bulma/VueSelectFilter.vue';
import IntervalFilter from './components/enso/bulma/IntervalFilter.vue';
import DateIntervalFilter from './components/enso/bulma/DateIntervalFilter.vue';
import Toastr from './components/enso/bulma/toastr';

import './modules/enso/mixins/errorHandler';

fontawesome.library.add(faVuejs, faCheck, faTimes);

Vue.component('fa', FontAwesomeIcon);

Vue.use(Toastr, {
    position: 'right',
    duration: 3000,
    closeButton: true,
});

window.axios = axios;

new Vue({
    store,

    components: {
        VueTable, VueFilter, VueSelectFilter, IntervalFilter, DateIntervalFilter,
    },

    data() {
        return {
            activeOptions: [
                { value: true, label: 'check', class: 'has-text-success' },
                { value: false, label: 'times', class: 'has-text-danger' },
            ],
            seniorityOptions: {
                1: 'Assistant',
                2: 'Associate',
                3: 'Staff Member',
                4: 'Senior',
                5: 'Partner',
            },
            filters: {
                examples: {
                    is_active: null,
                    seniority: null,
                },
            },
            intervals: {
                examples: {
                    hired_at: {
                        min: null,
                        max: null,
                        dbDateFormat: 'Y-m-d',
                    },
                    salary: {
                        min: null,
                        max: null,
                    },
                },
            },
        };
    },

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
