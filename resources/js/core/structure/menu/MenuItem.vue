<template>
    <a class="menu-item"
        @click="select">
        <span class="icon is-small">
            <fa :icon="menu.icon"/>
        </span>
        <transition enter-active-class="zoomIn"
            leave-active-class="zoomOut">
            <span class="animated has-margin-left-small menu-hiding-label"
                v-if="isExpanded">
                {{ __(menu.name) }}
            </span>
        </transition>
        <span class="icon is-small angle is-pulled-right"
            :aria-expanded="menu.expanded"
            v-if="menu.children.length">
            <fa icon="angle-up"/>
        </span>
        <div class="dropdown-content">
            <div class="dropdown-item"
                v-if="!isExpanded">
                {{ __(menu.name) }}
            </div>
        </div>
    </a>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
    name: 'MenuItem',

    props: {
        menu: {
            type: Object,
            required: true,
        },
    },

    computed: {
        ...mapState('layout/menu', ['isExpanded']),
        ...mapState('layout', ['isTouch']),
    },

    methods: {
        ...mapMutations('layout/menu', ['hide']),
        ...mapMutations('menus', ['toggle']),
        select() {
            if (this.menu.children.length) {
                this.toggle(this.menu);

                return;
            }

            this.$router.push({ name: this.menu.link });

            if (this.isTouch) {
                this.hide();
            }
        },
    },
};
</script>

<style lang="scss" scoped>

    .menu-item {
        display: flex;

        &:hover > div.dropdown-content {
            display: block;
        }
    }

    .menu-hiding-label {
            white-space: nowrap;
    }

    .dropdown-content {
        display: none;
        white-space: nowrap;
        padding-bottom: 0;
        padding-top: 0;
        margin-top: -9px;
        position: fixed;
        left: 56px;
    }

    .icon.angle {
        margin-left: auto;
    }

</style>
