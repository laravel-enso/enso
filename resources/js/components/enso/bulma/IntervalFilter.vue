<template>
    <div class="interval-filter">
        <div class="has-text-centered">
            <b>{{ title }}</b>
        </div>
        <div class="columns is-mobile">
            <div class="column">
                <div class="control has-icons-right">
                    <input :class="['input control', { 'is-danger': invalid }]"
                        v-model="interval.min"
                        :placeholder="minLabel"
                        :type="type"
                        @input="update">
                    <span class="icon is-small is-right clear-button"
                        @click="interval.min = null;update()"
                        v-if="interval.min">
                        <a class="delete is-small"/>
                    </span>
                </div>
            </div>
            <div class="column">
                <div class="control has-icons-right">
                    <input :class="['input control', { 'is-danger': invalid }]"
                        v-model="interval.max"
                        :placeholder="maxLabel"
                        :type="type"
                        @input="update">
                    <span class="icon is-small is-right clear-button"
                        @click="interval.max = null;update()"
                        v-if="interval.max">
                        <a class="delete is-small"/>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'IntervalFilter',

    props: {
        maxLabel: {
            type: String,
            default: 'Max',
        },
        minLabel: {
            type: String,
            default: 'Min',
        },
        title: {
            type: String,
            default: null,
        },
        type: {
            type: String,
            default: 'number',
        },
    },

    data: () => ({
        interval: {
            min: null,
            max: null,
        },
    }),

    computed: {
        invalid() {
            return this.interval.min !== null
                && this.interval.max !== null
                && this.interval.min > this.interval.max;
        },
    },

    methods: {
        update() {
            this.$emit('update', this.interval);
        },
    },
};

</script>

<style lang="scss" scoped>

    .interval-filter {
        padding: 0.5rem;
    }

    .control.has-icons-right .icon.clear-button {
        pointer-events: all;
    }

</style>
