<template>

    <div class="interval-filter">
        <div class="has-text-centered">
            <b>{{ title }}</b>
        </div>
        <div class="columns">
            <div class="column">
                <div class="control has-icons-right">
                    <input class="input control"
                        :type="type"
                        placeholder="Min"
                        :value="min"
                        @input="$emit('update-min', $event.target.value || null)">
                    <span class="icon is-small is-right clear-button"
                        v-if="min"
                        @click="$emit('update-min', null)">
                        <a class="delete is-small"></a>
                    </span>
                </div>
            </div>
            <div class="column">
                <div class="control has-icons-right">
                    <input class="input control"
                        :type="type"
                        placeholder="Max"
                        :value="max"
                        @input="$emit('update-max', $event.target.value || null)">
                    <span class="icon is-small is-right clear-button"
                        v-if="max"
                        @click="$emit('update-max', null)">
                        <a class="delete is-small"></a>
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
        title: {
            type: String,
            default: null,
        },
        type: {
            type: String,
            required: true,
        },
        min: {
            type: null,
            required: true,
        },
        max: {
            type: null,
            required: true,
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
