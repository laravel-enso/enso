import Vue from 'vue';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faVuejs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import store from './store';
import VueSelect from './components/enso/select/VueSelect.vue';
import VueSelectFilter from './components/enso/select/VueSelectFilter.vue';
import VueSwitch from './components/enso/vueforms/VueSwitch.vue';
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
