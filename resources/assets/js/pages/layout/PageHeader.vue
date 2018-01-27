<template>

    <div class="level">
        <div class="level-left is-hidden-mobile">
            <div class="level-item">
                <transition
                    mode="out-in"
                    enter-active-class="fadeIn"
                    leave-active-class="fadeOut">
                    <p class="title is-5 animated"
                        id="page-title"
                        v-if="loaded">
                        {{ __(title) }}
                    </p>
                </transition>
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <transition
                    mode="out-in"
                    enter-active-class="fadeInRight"
                    leave-active-class="fadeOutRight">
                    <breadcrumbs class="animated" id="breadcrumbs"
                         v-if="loaded">
                    </breadcrumbs>
                </transition>
            </div>
        </div>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';
import Breadcrumbs from './Breadcrumbs.vue';

export default {
    name: 'PageHeader',

    computed: {
        ...mapGetters('locale', ['__']),
    },

    components: { Breadcrumbs },

    watch: {
        title: {
            handler() {
                this.loaded = false;
                setTimeout(() => {
                    this.loaded = true;
                }, 350);
            },
        },
    },

    data() {
        return {
            loaded: true,
        };
    },

    props: {
        title: {
            type: String,
            default: null,
        },
    },
};

</script>
