import store from '../../store';

export default (to) => {
    if (to && store.state.preferences.global.history) {
        store.commit('history/push', to);
    }
};
