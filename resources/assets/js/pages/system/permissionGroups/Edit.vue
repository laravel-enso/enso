<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters">
            <vue-form-ss class="box is-raised animated fadeIn"
                :route-params="[$route.name, $route.params.id, false]"/>
        </div>
    </div>

</template>

<script>

import VueFormSs from '../../../components/enso/vueforms/VueFormSs.vue';

export default {
    components: { VueFormSs },
};

</script>
