import store from '../../store';

export default (to) => {
    document.title = store
        .getters['localisation/documentTitle'](to.meta.title);
};
