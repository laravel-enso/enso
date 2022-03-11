import Root from '@enso-ui/ui/src/bulma/Root.vue';
import App from '@enso-ui/ui/src/core/app';
import router from '@enso-ui/ui/src/core/services/router';
import store from '@enso-ui/ui/src/core/services/store';
import VTooltipPlugin from 'v-tooltip';
import { createApp } from 'vue';
import { sync } from 'vuex-router-sync';
import '../sass/enso.scss';
import './app';

sync(store, router);

const app = createApp(Root);

app.use(router)
    .use(store)
    .use(VTooltipPlugin);

App.boot(app, store, router);

app.mount('#app');

window.app = App;
