<template>

    <transition appear
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

    props: {
        id: {
            type: [String, Object],
            required: true,
        },
    },

    computed: {
        active() {
            return this.$parent.tabs
                .findIndex(tab => JSON.stringify(tab) === JSON.stringify(this.id))
                    === this.$parent.active;
        },
    },

    created() {
        this.$parent.tabs.push(this.id);
    },
};

</script>
