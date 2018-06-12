<template>

    <div class="level">
        <div class="level-left is-hidden-mobile">
            <div class="level-item">
                <transition mode="out-in"
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
                         v-if="loaded"/>
                </transition>
            </div>
        </div>
    </div>

</template>

<script>

import Breadcrumbs from './Breadcrumbs.vue';

export default {
    name: 'PageHeader',

    components: { Breadcrumbs },

    props: {
        title: {
            type: String,
            default: null,
        },
    },

    data() {
        return {
            loaded: true,
        };
    },

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
};

</script>
