<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters">
            <vue-form-ss class="box animated fadeIn"
                :route-params="[$route.name, null, false]">
                <template slot="icon" slot-scope="{ field, errors }">
                    <div class="control has-icons-right">
                        <input class="input"
                            :class="{ 'is-danger': errors.has('icon') }"
                            @keydown="errors.clear(field.name)"
                            v-model="field.value"
                            type="text">
                        <span class="icon is-small is-right"
                            v-if="errors.has('icon')">
                            <fa icon="exclamation-triangle"/>
                        </span>
                    </div>
                </template>
            </vue-form-ss>
        </div>
    </div>

</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faExclamationTriangle } from '@fortawesome/fontawesome-free-solid/shakable.es';
import VueFormSs from '../../../components/enso/vueforms/VueFormSs.vue';

fontawesome.library.add(faExclamationTriangle);

export default {
    components: { VueFormSs },
};

</script>
