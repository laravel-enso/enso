import Vue from 'vue';

Vue.directive('focus', {
    inserted: el => el.focus(),
});
