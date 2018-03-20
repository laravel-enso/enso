import Vue from 'vue';
import store from '../../../store';
import Toastr from '../../../components/enso/bulma/toastr';

Vue.use(Toastr, {
    i18n: store.getters['locale/__'],
    position: 'right',
    duration: 3000,
    closeButton: true,
});
