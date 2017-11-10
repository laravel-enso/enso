<template>
    <card :icon="data.icon"
        :title="data.title"
        :controls="32">
        <a slot="control-1" class="card-header-icon"
            v-if="data.actions.update && hasChanges">
            <span class="icon is-small"
                @click="setOriginal()">
                <i class="fa fa-undo"></i>
            </span>
        </a>
        <a slot="control-2" class="card-header-icon">
            <span class="icon is-small"
                @click="clear()">
                <i class="fa fa-eraser"></i>
            </span>
        </a>
        <vue-form
            :data="data"
            ref="form">
            <slot></slot>
        </vue-form>
    </card>
</template>

<script>

import Card from '../bulma/Card.vue';
import VueForm from './VueForm.vue';

export default {
    components: { Card, VueForm },

    props: {
        data: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            originalData: this.data.fields.pluck('value'),
        };
    },

    computed: {
        hasChanges() {
            const self = this;

            return this.data.fields.filter((attribute, index) => {
                if (Array.isArray(attribute.value)) {
                    return attribute.value.sort().toString()
                        === self.originalData[index].sort().toString();
                }

                return !attribute.value && !self.originalData[index]
                    || (attribute.value && self.originalData[index]
                    && attribute.value === self.originalData[index]);
            }).length !== this.data.fields.length;
        },
    },

    methods: {
        setOriginal() {
            const self = this;

            this.data.fields.forEach((attribute, index) => {
                attribute.value = self.originalData[index];
            });

            this.$refs.form.errors.empty();
        },
        clear() {
            this.data.fields.forEach((field) => {
                if (Array.isArray(field.value)) {
                    field.value = [];
                    return;
                }

                if (typeof (field.value) === 'boolean') {
                    field.value = false;
                    return;
                }

                field.value = null;
            });
        },
    },
};

</script>
