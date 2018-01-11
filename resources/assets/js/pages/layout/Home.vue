<template>

    <section class="hero is-fullheight is-primary is-bold">
        <div class="hero-body">
            <div class="container has-text-centered">
                <overlay v-if="loading"
                    :opacity="false"
                    color="#dbdbdb"
                    size="large">
                </overlay>
                <div class="title is-1 inspiring animated fadeInDown"
                     v-if="!loading">
                    {{ meta.quote }}
                </div>

                <button class="animated fadeInRightBig button is-outlined"
                    @click="$emit('enter-app')"
                    v-if="!loading">
                    {{ __('Enter the application') }}
                </button>
            </div>
        </div>
    </section>

</template>

<script>

import { mapState, mapGetters } from 'vuex';
import Overlay from '../../components/enso/bulma/Overlay.vue';

export default {
    name: 'Home',

    components: { Overlay },

    computed: {
        ...mapState(['meta', 'appIsLoaded']),
        ...mapGetters('locale', ['__']),
    },

    data() {
        return {
            loading: true,
        };
    },

    watch: {
        appIsLoaded: {
            handler: 'endLoadingState',
        },
    },

    methods: {
        endLoadingState() {
            if (this.appIsLoaded) {
                setTimeout(() => {
                    this.loading = false;
                }, 500);
            }
        },
    },

    mounted() {
        this.endLoadingState();
    },
};

</script>

<style>

    .title.inspiring {
        font-weight: 200;
    }

</style>
