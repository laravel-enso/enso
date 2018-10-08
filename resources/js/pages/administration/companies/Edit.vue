<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters is-full-touch">
            <vue-form-ss class="box raises-on-hover animated fadeIn"
                :route-params="[$route.name, $route.params.id, false]"
                @loaded="initialised = true"
                ref="form"/>
            <div v-if="initialised">
                <morphable-container type="LaravelEnso\Companies\app\Models\Company"
                    :id="$refs.form.data.params.companyId"
                    addresses
                    contacts
                    comments
                    discussions
                    documents/>
            </div>
        </div>
    </div>

</template>

<script>

import MorphableContainer from '../../../components/enso/bulma/MorphableContainer.vue';
import VueFormSs from '../../../components/enso/vueforms/VueFormSs.vue';

export default {
    components: { MorphableContainer, VueFormSs },

    data() {
        return {
            initialised: false,
        };
    },
};

</script>
