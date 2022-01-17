import Root from '@enso-ui/ui/src/bulma/Root.vue';
import App from '@enso-ui/ui/src/core/app';
import router from '@enso-ui/ui/src/core/services/router';
import store from '@enso-ui/ui/src/core/services/store';
import VTooltipPlugin from 'v-tooltip';
// import Vue, { createApp } from 'vue';
import { createApp } from 'vue';
import { sync } from 'vuex-router-sync';
import '../sass/enso.scss';
import './app';

sync(store, router);

// Vue.configureCompat({
//     RENDER_FUNCTION: false,
//     INSTANCE_LISTENERS: false,
//     COMPONENT_V_MODEL: false,
//     ATTR_FALSE_VALUE: false,
//     INSTANCE_ATTRS_CLASS_STYLE: false,
//     TRANSITION_GROUP_ROOT: false,
// });

const app = createApp(Root);

app.use(router)
    .use(store)
    .use(VTooltipPlugin);

App.boot(app, store, router);

app.mount('#app');

window.app = App;
