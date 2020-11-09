import Vue from 'vue';
import Vuex from 'vuex';
import App from '@enso-ui/ui/src/core/bulma';
import LocalStore from '@enso-ui/ui/src/modules/localStore';
import storeImporter from '@core/modules/importers/storeImporter';

Vue.use(Vuex);

const modules = storeImporter(require.context('./store', false, /.*\.js$/));

const localStore = (new LocalStore()).setModules(modules);

const store = App.buildStore(localStore);

export default new Vuex.Store(store);
