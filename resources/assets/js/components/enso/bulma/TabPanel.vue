<template>

    <div class="animated fadeIn"
        v-if="active">
        <slot></slot>
    </div>

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
