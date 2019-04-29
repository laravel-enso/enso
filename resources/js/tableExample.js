import Vue from 'vue';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faVuejs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
    ToastrPlugin, Toastr, Tabs, Tab, VueFilter,
    IntervalFilter, DateIntervalFilter, SelectFilter as VueSelectFilter,
} from '@enso-ui/bulma';
import { hljs } from '@enso-ui/directives';
import { VueTable } from '@enso-ui/tables/bulma';
import store from './store';

library.add(faVuejs, faGithub, faCheck, faTimes);

Vue.component('fa', FontAwesomeIcon);

Vue.use(ToastrPlugin, {
    layout: Toastr,
    options: {
        duration: 3500,
    },
});

window.axios = axios;

new Vue({
    store,

    comments: true,

    directives: { hljs },

    components: {
        VueTable,
        VueFilter,
        VueSelectFilter,
        IntervalFilter,
        DateIntervalFilter,
        Tabs,
        Tab,
    },

    data() {
        return {
            showCode: false,
            activeOptions: [
                { value: true, icon: 'check', class: 'has-text-success' },
                { value: false, icon: 'times', class: 'has-text-danger' },
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
