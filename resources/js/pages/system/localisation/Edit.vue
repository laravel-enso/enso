<template>
    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <enso-form class="box has-background-light raises-on-hover animated fadeIn">
                <template slot="flag" slot-scope="{ field }">
                    <div class="control has-icons-right">
                        <input class="input"
                            type="text"
                            readonly
                            :value="field.value">
                        <span class="icon is-small is-right">
                            <i class="is-icon" :class="field.value"/>
                        </span>
                    </div>
                </template>
            </enso-form>
        </div>
    </div>
</template>

<script>

import EnsoForm from '../../../components/enso/vueforms/EnsoForm.vue';

export default {
    components: { EnsoForm },
};

</script>
