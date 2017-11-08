import Vue from 'vue';

Vue.filter('timeFromNow', value => moment(value).fromNow());
