export default (to, from, next) => {
    if (to.meta.guestGuard) {
        next();
    } else {
        next({ name: 'login' });
    }
};
