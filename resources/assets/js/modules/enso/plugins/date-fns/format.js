import { format } from 'date-fns/esm';
import store from '../../../../store';
import i18n from './i18n';

export default (date, formatStr) => format(date, formatStr, {
    locale: i18n[store.state.user.preferences.global.lang],
});
