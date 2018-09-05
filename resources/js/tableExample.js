import Vue from 'vue';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faVuejs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
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

library.add(faVuejs, faGithub, faCheck, faTimes);

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
                { id: 3, name: 'Staff' },
                { id: 4, name: 'Senior' },
                { id: 5, name: 'Partner' },
            ],
            filters: {
                examples: {
                    is_active: null,
                    seniority: [],
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
        clicked({ column, row }) {
            this.$toastr.info(`You just clicked "${row[column.name]}" on column "${column.name}"`, 'Click Event');
        },
    },
}).$mount('#app');

require('highlight.js/styles/atom-one-dark.css');
