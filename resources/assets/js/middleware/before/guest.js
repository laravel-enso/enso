export default (from, to, next) => {
    if (to.meta.guestGuard) {
        next();
    } else {
        next({ name: 'login' });
    }
};

