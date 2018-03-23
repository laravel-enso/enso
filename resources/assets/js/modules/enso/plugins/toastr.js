import Vue from 'vue';
import Toastr from '../../../components/enso/bulma/toastr';

Vue.use(Toastr, {
    position: 'right',
    duration: 3000,
    closeButton: true,
});
