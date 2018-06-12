import store from '../../store';

const exceptions = ['notFound', 'unauthorized'];

export default (from, to, next) => {
    if (!store.state.isInitialised
            || store.getters.routes.includes(to.name)
            || exceptions.includes(to.name)) {
        next();
    } else {
        next({ name: 'unauthorized' });
    }
};
