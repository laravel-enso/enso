import Vue from 'vue';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faVuejs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
    ToastrPlugin, Toastr, Tabs, Tab, VueSwitch, SelectFilter as VueSelectFilter,
} from '@enso-ui/bulma';
import { VueSelect } from '@enso-ui/select/bulma';
import { hljs } from '@enso-ui/directives';
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
        VueSelect, VueSelectFilter, Tabs, Tab, VueSwitch,
    },

    data() {
        return {
            showCode: false,
            seniorityOptions: [
                { id: 1, name: 'Assistant' },
                { id: 2, name: 'Associate' },
                { id: 3, name: 'Staff' },
                { id: 4, name: 'Senior' },
                { id: 5, name: 'Partner' },
            ],
            simple: null,
            multiple: [],
            simpleSS: null,
            multipleSS: [],
            multipleMaster: [],
            multipleSlave: [],
            filters: {
                examples: {
                    is_active: null,
                    seniority: [],
                },
            },
        };
    },

}).$mount('#app');

require('highlight.js/styles/atom-one-dark.css');
