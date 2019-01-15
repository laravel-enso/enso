import { formatDistance, parseISO } from 'date-fns/esm';
import store from '../../../../store';
import i18n from './i18n';

export default date => formatDistance(
    (typeof date === 'string') ? parseISO(date) : date,
    new Date(),
    { locale: i18n[store.state.preferences.global.lang] },
);
