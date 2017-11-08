import Vue from 'vue';

Vue.directive('select-on-focus', {
    inserted(el) {
        el.addEventListener('focus', () => el.select());
    },
});
