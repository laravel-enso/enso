import store from '../../store';

export default (to) => {
    if (to) {
        store.commit('history/push', to);
    }
};
