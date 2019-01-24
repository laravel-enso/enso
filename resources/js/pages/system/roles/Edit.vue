<template>
    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <enso-form class="box has-background-light raises-on-hover animated fadeIn"
                @loaded="ready = true"
                ref="form">
                <span slot="actions"
                    v-if="ready">
                    <a class="button is-warning"
                        @click="$router.push({
                            name: 'system.roles.configure',
                            params: { role: $refs.form.routeParam('role') }
                        })">
                        <span class="is-hidden-mobile">
                            {{ __('Configure') }}
                        </span>
                        <span class="icon">
                            <fa icon="sliders-h"/>
                        </span>
                        <span class="is-hidden-mobile"/>
                    </a>
                    <a class="button is-link"
                        @click="writeConfig">
                        <span class="is-hidden-mobile">
                            {{ __('File') }}
                        </span>
                        <span class="icon">
                            <fa icon="save"/>
                        </span>
                        <span class="is-hidden-mobile"/>
                    </a>
                </span>
            </enso-form>
        </div>
    </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSave, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import EnsoForm from '../../../components/enso/vueforms/EnsoForm.vue';

library.add([faSave, faSlidersH]);

export default {
    components: { EnsoForm },

    data: () => ({
        ready: false,
    }),

    methods: {
        writeConfig() {
            axios.post(route('system.roles.writeConfig', this.$refs.form.routeParam('role')))
                .then(({ data }) => this.$toastr.success(data.message))
                .catch(error => this.handleError(error));
        },
    },
};

</script>
