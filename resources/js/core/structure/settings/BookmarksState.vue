<template>
    <div class="level is-mobile settings">
        <div class="level-left">
            <div class="level-item">
                {{ __('Bookmarks') }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <vue-switch v-model="state"
                    size="is-medium"
                    @input="update"/>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import VueSwitch from '../../../components/enso/vueforms/VueSwitch.vue';

export default {
    name: 'BookmarksState',

    components: { VueSwitch },

    computed: {
        ...mapGetters('preferences', ['bookmarks']),
        state: {
            get() {
                return this.bookmarks;
            },
            set(value) {
                this.setBookmarksState(value);
            },
        },
    },

    methods: {
        ...mapActions('preferences', ['setBookmarksState']),
        ...mapActions('bookmarks', ['push']),
        update(state) {
            if (state) {
                this.push(this.$route);
            }
        },
    },
};

</script>
