<template>
    <component :is="tab"
        :active="active">
        <slot/>
    </component>
</template>

<script>

import AliveTab from './AliveTab.vue';
import StaticTab from './StaticTab.vue';

export default {
    name: 'Tab',

    components: { AliveTab, StaticTab },

    props: {
        id: {
            type: [String, Object],
            required: true,
        },
        default: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        keepAlive: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        tab() {
            return this.keepAlive
                ? 'alive-tab'
                : 'static-tab';
        },
        index() {
            return this.$parent.tabs
                .findIndex(tab => JSON.stringify(tab) === JSON.stringify(this.id));
        },
        active() {
            return this.index === this.$parent.active;
        },
    },

    watch: {
        disabled(value) {
            if (value) {
                this.$parent.disable(this.index);
                return;
            }

            this.$parent.enable(this.index);
        },
    },

    created() {
        this.$parent.tabs.push(this.id);

        if (this.default || this.$parent.active === null) {
            this.$parent.activate(this.index);
        }

        if (this.disabled) {
            this.$parent.disable(this.index);
        }
    },

    beforeDestroy() {
        this.$parent.tabs.splice(this.index, 1);
    },
};

</script>
