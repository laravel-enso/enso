import Vue from 'vue';
import { formatDistance } from 'date-fns/esm';

Vue.filter('timeFromNow', value => formatDistance(value, new Date()));
