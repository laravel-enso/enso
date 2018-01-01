<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters">
            <vue-form :data="form"
                class="box animated fadeIn"
                v-if="initialised">
                <template slot="flag" slot-scope="props">
                    <div class="control has-icons-right">
                        <input class="input"
                            type="text"
                            disabled
                            :value="props.field.value">
                        <span class="icon is-small is-right">
                            <i class="is-icon" :class="props.field.value">
                            </i>
                        </span>
                    </div>
                </template>
            </vue-form>
        </div>
    </div>

</template>

<script>

import VueForm from '../../../../components/enso/vueforms/VueForm.vue';

export default {
    components: { VueForm },

    data() {
        return {
            initialised: false,
            form: {},
        };
    },

    created() {
        axios.get(route(this.$route.name, this.$route.params.id, false)).then((response) => {
            this.form = response.data.form;
            this.initialised = true;
        }).catch(error => this.handleError(error));
    },
};

</script>
