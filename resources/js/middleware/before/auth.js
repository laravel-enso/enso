export default (to, from, next) => {
    if (to.meta.guestGuard) {
        next({ name: '/' });
    } else {
        next();
    }
};
