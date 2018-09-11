import Vue from 'vue';
import store from '../../../store';

Vue.filter('numberFormat', (value, decimals = 3) =>
    new Intl.NumberFormat(store.state.preferences.global.lang, {
        style: 'decimal',
        maximumSignificantDigits: decimals,
    }).format(value));
