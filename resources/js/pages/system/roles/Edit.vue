<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <vue-form-ss class="box raises-on-hover animated fadeIn"
                @loaded="initialised = true"
                ref="form">
                <span slot="actions"
                    v-if="initialised">
                    <a class="button is-warning"
                        @click="$router.push({
                            name: 'system.roles.configure',
                            params: { role: $refs.form.data.routeParams.role }
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
            </vue-form-ss>
        </div>
    </div>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSave, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import VueFormSs from '../../../components/enso/vueforms/VueFormSs.vue';

library.add([faSave, faSlidersH]);

export default {
    components: { VueFormSs },

    data: () => ({
        initialised: null,
    }),

    methods: {
        writeConfig() {
            axios.post(route(
                'system.roles.writeConfig',
                this.$refs.form.data.routeParams.role,
            )).then(({ data }) => this.$toastr.success(data.message))
                .catch(error => this.handleError(error));
        },
    },
};

</script>
