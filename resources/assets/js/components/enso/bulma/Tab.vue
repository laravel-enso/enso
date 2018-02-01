<template>

    <transition appear
        :duration="500"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut">
        <div class="animated"
            v-if="active">
            <slot></slot>
        </div>
    </transition>

</template>

<script>

export default {
    name: 'Tab',

    props: {
        id: {
            type: [String, Object],
            required: true,
        },
    },

    computed: {
        index() {
            return this.$parent.tabs
                .findIndex(tab => JSON.stringify(tab) === JSON.stringify(this.id));
        },
        active() {
            return this.index === this.$parent.active;
        },
    },

    created() {
        this.$parent.tabs.push(this.id);
    },

    beforeDestroy() {
        this.$parent.tabs.splice(this.index, 1);
    },
};

</script>
