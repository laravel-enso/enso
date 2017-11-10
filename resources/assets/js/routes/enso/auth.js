import store from '../../store';
import router from '../../router';
import Login from '../../pages/enso/auth/Login.vue';
import Email from '../../pages/enso/auth/password/Email.vue';
import Reset from '../../pages/enso/auth/password/Reset.vue';

const redirect = (to, from, next) => {
    if (store.getters['auth/isAuth']) {
        router.replace({
            path: '/',
        });
    }
    next();
};

export const Auth = [{
    name: 'login',
    path: '/login',
    component: Login,
    beforeEnter: redirect,
    meta: {
        guestGuard: true,
        title: 'Login',
    },
}, {
    path: '/password/reset',
    name: 'password.email',
    component: Email,
    beforeEnter: redirect,
    meta: {
        guestGuard: true,
        title: 'Email Reset Link',
    },
}, {
    path: '/password/reset/:token',
    name: 'password.reset',
    component: Reset,
    beforeEnter: redirect,
    meta: {
        guestGuard: true,
        title: 'Reset Password',
    },
}];
