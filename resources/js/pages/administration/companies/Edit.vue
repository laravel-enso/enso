<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters is-full-touch">
            <vue-form-ss class="box has-background-light raises-on-hover animated fadeIn"
                @loaded="initialised = true"
                ref="form"/>
            <div v-if="initialised">
                <accessories type="LaravelEnso\Companies\app\Models\Company"
                    :id="$refs.form.data.routeParams.company"
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

import Accessories from '../../../components/enso/bulma/Accessories.vue';
import VueFormSs from '../../../components/enso/vueforms/VueFormSs.vue';

export default {
    components: { VueFormSs, Accessories },

    data() {
        return {
            initialised: false,
        };
    },
};

</script>
