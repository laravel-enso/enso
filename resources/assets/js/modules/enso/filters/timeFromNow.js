import Vue from 'vue';
import { distanceInWordsToNow } from 'date-fns';

Vue.filter('timeFromNow', value => distanceInWordsToNow(value));
