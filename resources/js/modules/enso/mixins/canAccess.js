import Vue from 'vue';
import store from '../../../store';

Vue.mixin({
    methods: {
        canAccess(route) {
            return store.getters.routes.includes(route);
        },
    },
});
