<template>

    <section class="hero is-fullheight is-primary is-bold">
        <div class="hero-body">
            <div class="container has-text-centered">
                <overlay v-if="loading"
                    :opacity="false"
                    color="#dbdbdb"
                    size="large">
                </overlay>
                <div v-if="!loading">
                    <div class="title is-1 inspiring animated fadeInDown">
                        {{ meta.quote }}
                    </div>
                    <button class="animated fadeInRightBig button is-outlined"
                        @click="$bus.$emit('enter-app')">
                        {{ __('Enter the application') }}
                    </button>
                </div>
            </div>
        </div>
    </section>

</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';
import Overlay from '../../components/enso/bulma/Overlay.vue';

export default {
    name: 'Home',

    components: { Overlay },

    data() {
        return {
            loading: true,
        };
    },

    computed: {
        ...mapState(['meta']),
        ...mapState(['isInitialised']),
        ...mapGetters('locale', ['__']),
    },

    watch: {
        isInitialised(initialised) {
            if (initialised) {
                setTimeout(() => {
                    this.loading = false;
                }, 250);
            }
        },
    },

    created() {
        this.initialise();
    },

    methods: {
        ...mapActions(['initialise']),
    },
};

</script>

<style>

    .title.inspiring {
        font-weight: 200;
    }

</style>
