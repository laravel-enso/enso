<template>
    <div class="level">
        <div class="level-left is-hidden-mobile">
            <div class="level-item">
                <transition mode="out-in"
                    enter-active-class="fadeIn"
                    leave-active-class="fadeOut">
                    <p v-if="loaded"
                        id="page-title"
                        class="title is-5 animated">
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
                    <breadcrumbs v-if="loaded" id="breadcrumbs"
                         class="animated"/>
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

    data: () => ({
        loaded: true,
    }),

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

<style lang="scss" scoped>
    @media screen and (max-width: 768px) {
        .level-left+.level-right {
            margin-top: unset;
        }
    }
</style>
