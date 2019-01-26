<template>
    <a class="menu-item"
        @click="select">
        <span class="icon is-small">
            <fa fixed-width
                :icon="menu.icon"/>
        </span>
        <transition enter-active-class="zoomIn"
            leave-active-class="zoomOut">
            <span v-if="isExpanded"
                class="animated has-margin-left-small menu-hiding-label">
                {{ __(menu.name) }}
            </span>
        </transition>
        <span v-if="menu.has_children"
            class="icon is-small angle is-pulled-right"
            :aria-expanded="menu.expanded">
            <fa icon="angle-up"/>
        </span>
        <div class="dropdown-content">
            <div v-if="!isExpanded"
                class="dropdown-item">
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
            if (this.menu.has_children) {
                this.toggle(this.menu);

                return;
            }

            this.$router.push({ name: this.menu.route });

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
