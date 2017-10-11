import store from '../../store';
import router from '../../router';
export const Auth = [{
    name: 'login',
    path: '/login',
    component: require('../../pages/enso/auth/Login.vue'),
    beforeEnter: (to, from, next) => {
        if (store.getters['auth/isAuth']) {
            router.replace({
                path: '/'
            });
        }
        next();
    },
    meta: {
        title: 'Login'
    }
}, {
    path: '/password/reset',
    name: 'password.email',
    component: require('../../pages/enso/auth/password/Email.vue'),
    beforeEnter: (to, from, next) => {
        if (store.getters['auth/isAuth']) {
            router.replace({
                path: '/'
            });
        }
        next();
    },
    meta: {
        title: 'Email Reset Link'
    },
}, {
    path: '/password/reset/:token',
    name: 'password.reset',
    component: require('../../pages/enso/auth/password/Reset.vue'),
    beforeEnter: (to, from, next) => {
        if (store.getters['auth/isAuth']) {
            router.replace({
                path: '/'
            });
        }
        next();
    },
    meta: {
        title: 'Reset Password'
    },
}];