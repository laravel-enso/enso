<template>

    <div class="box vue-filter">
        <div class="has-text-centered">
            <b>{{ title }}</b>
        </div>
        <vue-select
            v-on="$listeners"
            v-bind="$attrs">
        </vue-select>
    </div>

</template>

<script>

import VueSelect from '../vueforms/VueSelect.vue';

export default {
    components: { VueSelect },

    props: {
        title: {
            type: String,
            default: null,
        },
    },
};

</script>

<style scoped>

    .vue-filter {
        padding: 0.5rem;
    }

</style>
