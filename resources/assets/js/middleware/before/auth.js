export default (from, to, next) => {
    if (to.meta.guestGuard) {
        next({ name: '/' });
    } else {
        next();
    }
};
