import store from '../../store';
import router from '../../router';
import Login from '../../pages/enso/auth/Login.vue';
import Email from '../../pages/enso/auth/password/Email.vue';
import Reset from '../../pages/enso/auth/password/Reset.vue';

export const Auth = [{
    name: 'login',
    path: '/login',
    component: Login,
    beforeEnter: (to, from, next) => {
        if (store.getters['auth/isAuth']) {
            router.replace({
                path: '/',
            });
        }
        next();
    },
    meta: {
        title: 'Login',
    },
}, {
    path: '/password/reset',
    name: 'password.email',
    component: Email,
    beforeEnter: (to, from, next) => {
        if (store.getters['auth/isAuth']) {
            router.replace({
                path: '/',
            });
        }
        next();
    },
    meta: {
        title: 'Email Reset Link',
    },
}, {
    path: '/password/reset/:token',
    name: 'password.reset',
    component: Reset,
    beforeEnter: (to, from, next) => {
        if (store.getters['auth/isAuth']) {
            router.replace({
                path: '/',
            });
        }
        next();
    },
    meta: {
        title: 'Reset Password',
    },
}];
