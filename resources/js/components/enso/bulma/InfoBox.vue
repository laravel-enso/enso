<template>
    <div class="box is-paddingless">
        <div :class="[
                'header title is-5 is-marginless has-padding-large has-background-light',
                { 'is-clickable': collapsible }
            ]"
            v-if="title"
            @click="collapsible ? toggle() : null">
            <slot name="title"/>
            <span class="icon angle"
                :aria-hidden="expanded"
                v-if="collapsible">
                <fa icon="angle-up"/>
            </span>
        </div>
        <slot v-if="expanded"/>
    </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faSync, faAngleDown }
    from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faSync, faAngleDown);

export default {
    name: 'InfoBox',

    props: {
        title: {
            type: Boolean,
            default: false,
        },
        collapsible: {
            type: Boolean,
            default: false,
        },
        collapsed: {
            type: Boolean,
            default: false,
        },
    },

    data: v => ({
        expanded: !v.collapsed,
    }),

    watch: {
        collapsed(value) {
            this.expanded = !value;
        },
    },

    methods: {
        toggle() {
            this.expanded = !this.expanded;
            this.$emit(this.expanded ? 'expand' : 'collapse');
        },
    },
};

</script>

<style lang="scss" scoped>

@import '~bulma/sass/utilities/initial-variables';
@import '~bulma/sass/utilities/derived-variables.sass';

.box {
    border-top: 2px solid $light;
    transition: border-color .75s ease, box-shadow 0.3s ease-in-out;;
    position: relative;

    .header {
        border-radius: inherit;

        .icon.angle {
            right: 0.5em;
            top: 0.8em;
            position: absolute;
            transition: transform .300s ease;

            &[aria-hidden="true"] {
                transform: rotate(180deg);
            }
        }
    }

    &.is-info {
        border-color: $info;
    }

    &.is-warning {
        border-color: $warning;
    }

    &.is-success {
        border-color: $success;
    }

    &.is-danger {
        border-color: $danger;
    }

    &.is-primary {
        border-color: $primary;
    }
}

</style>
