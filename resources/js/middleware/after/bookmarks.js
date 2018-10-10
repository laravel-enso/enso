import router from '../../router';
import store from '../../store';

export default (to) => {
    if (store.state.preferences.global.bookmarks) {
        store.dispatch('bookmarks/push', to)
            .then(() => router.app.$emit('bookmarks-update'));
    }
};
