<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <vue-form-ss class="box raises-on-hover animated fadeIn"
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
