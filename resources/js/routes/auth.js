import store from '../store';

const Login = () => import('../pages/auth/Login.vue');
const Email = () => import('../pages/auth/password/Email.vue');
const Reset = () => import('../pages/auth/password/Reset.vue');

const redirect = (to, from, next) => {
    if (store.state.auth.isAuth) {
        next({ path: '/' });
    } else {
        next();
    }
};

export default [{
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
