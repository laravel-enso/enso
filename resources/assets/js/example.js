import Vue from 'vue';
import axios from 'axios';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faVuejs, faGithub } from '@fortawesome/fontawesome-free-brands/shakable.es';
import { faCheck, faTimes } from '@fortawesome/fontawesome-free-solid/shakable.es';
import store from './store';
import VueTable from './components/enso/vuedatatable/VueTable.vue';
import VueFilter from './components/enso/bulma/VueFilter.vue';
import VueSelectFilter from './components/enso/select/VueSelectFilter.vue';
import IntervalFilter from './components/enso/bulma/IntervalFilter.vue';
import DateIntervalFilter from './components/enso/bulma/DateIntervalFilter.vue';
import Tabs from './components/enso/bulma/Tabs.vue';
import Tab from './components/enso/bulma/Tab.vue';
import Toastr from './components/enso/bulma/toastr';
import './modules/enso/directives/hljs';

import './modules/enso/mixins/errorHandler';

fontawesome.library.add(faVuejs, faGithub, faCheck, faTimes);

Vue.component('fa', FontAwesomeIcon);

Vue.use(Toastr, {
    position: 'right',
    duration: 3000,
    closeButton: true,
});

window.axios = axios;

new Vue({
    store,

    comments: true,

    components: {
        VueTable, VueFilter, VueSelectFilter, IntervalFilter, DateIntervalFilter, Tabs, Tab,
    },

    data() {
        return {
            showCode: false,
            activeOptions: [
                { value: true, label: 'check', class: 'has-text-success' },
                { value: false, label: 'times', class: 'has-text-danger' },
            ],
            seniorityOptions: [
                { id: 1, name: 'Assistant' },
                { id: 2, name: 'Associate' },
                { id: 3, name: 'Staff Member' },
                { id: 4, name: 'Senior' },
                { id: 5, name: 'Partner' },
            ],
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
        clicked(column, row) {
            this.$toastr.info(`You just clicked "${row[column.name]}" on column "${column.name}"`, 'Click Event');
        },
    },
}).$mount('#app');

require('highlight.js/styles/atom-one-dark.css');
