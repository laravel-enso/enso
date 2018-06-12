import store from '../store';
import guest from './before/guest';
import auth from './before/auth';
import allow from './before/allow';
import nprogress from './before/nprogress';

export default (to, from, next) => {
    nprogress();
    if (store.state.auth.isAuth) {
        auth(to, from, next);
        allow(to, from, next);
    } else {
        guest(to, from, next);
    }
};
