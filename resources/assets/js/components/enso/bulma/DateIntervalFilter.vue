<template>

    <div class="date-interval-filter">
        <div class="has-text-centered">
            <b>{{ title }}</b>
        </div>
        <div class="columns">
            <div class="column">
                <datepicker :format="format"
                    :value="min"
                    :placeholder="minLabel"
                    @input="$emit('update-min', $event || null)">
                </datepicker>
            </div>
            <div class="column">
                <datepicker :format="format"
                    :value="max"
                    :placeholder="maxLabel"
                    @input="$emit('update-max', $event || null)">
                </datepicker>
            </div>
        </div>
    </div>

</template>

<script>

import Datepicker from '../vueforms/Datepicker.vue';

export default {
    name: 'DateIntervalFilter',

    components: { Datepicker },

    props: {
        title: {
            type: String,
            default: null,
        },
        min: {
            type: null,
            required: true,
        },
        max: {
            type: null,
            required: true,
        },
        format: {
            type: String,
            default: 'd-m-Y',
        },
        minLabel: {
            type: String,
            default: 'From',
        },
        maxLabel: {
            type: String,
            default: 'To',
        },
    },
};

</script>

<style scoped>

    .date-interval-filter {
        padding: 0.5rem;
    }

</style>
