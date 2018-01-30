<template>

    <div class="box date-interval-filter">
        <div class="has-text-centered">
            <b>{{ title }}</b>
        </div>
        <div class="columns">
            <div class="column">
                <datepicker
                    :value="min"
                    @input="$emit('update-min', $event || null)">
                </datepicker>
            </div>
            <div class="column">
                <datepicker
                    :value="max"
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
            required: true,
        },
        max: {
            required: true,
        },
    },
};

</script>

<style scoped>

    .date-interval-filter {
        padding: 0.5rem;
    }

</style>
