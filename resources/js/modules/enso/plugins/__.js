import store from '../../../store';

export default (key, params = null) => {
    if (key === null || key === '' || typeof key === 'undefined') {
        return null;
    }

    if (!store.getters['localisation/isInitialised']) {
        return key;
    }

    let translation = store.getters['localisation/__'](key);

    if (typeof translation === 'undefined' || translation === null) {
        translation = key;

        if (store.state.localisation.keyCollector) {
            store.commit('localisation/addMissingKey', key);
        }
    }

    return !!params && typeof params === 'object'
        ? translation.replace(/:(\w*)/g, (e, key) => {
            if (typeof params[key.toLowerCase()] === 'undefined') {
                return key;
            }

            const param = params[key.toLowerCase()];

            if (key === key.toUpperCase()) {
                return param.toUpperCase();
            }

            return key[0] === key[0].toUpperCase()
                ? param.charAt(0).toUpperCase() + param.slice(1)
                : param;
        })
        : translation || key;
};
