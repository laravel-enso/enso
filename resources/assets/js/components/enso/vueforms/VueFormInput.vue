<template>

    <span>
        <div class="control has-icons-right"
            v-if="field.meta.content === 'text'">
            <input class="input"
                :class="{ 'is-danger': hasError }"
                :readonly="field.meta.readonly"
                @keydown="$emit('update')"
                v-model="field.value"
                type="text"
                :disabled="field.meta.disabled">
            <span class="icon is-small is-right has-text-danger"
                v-if="hasError">
                <i class="fa fa-warning"></i>
            </span>
        </div>
        <div class="control has-icons-right"
            v-if="field.meta.content === 'email'">
            <input class="input"
                :class="{ 'is-danger': hasError }"
                :readonly="field.meta.readonly"
                @keydown="$emit('update')"
                v-model="field.value"
                type="email"
                :disabled="field.meta.disabled">
            <span class="icon is-small is-right has-text-danger"
                v-if="hasError">
                <i class="fa fa-warning"></i>
            </span>
        </div>
        <div class="control has-icons-right"
            v-if="field.meta.content === 'number'">
            <input class="input"
                :class="{ 'is-danger': hasError }"
                :readonly="field.meta.readonly"
                @keydown="$emit('update')"
                v-model="field.value"
                type="number"
                :step="field.meta.step"
                :min="field.meta.min"
                :max="field.meta.max"
                :disabled="field.meta.disabled">
            <span class="icon is-small is-right has-text-danger"
                v-if="hasError">
                <i class="fa fa-warning"></i>
            </span>
        </div>
        <span v-if="field.meta.content === 'checkbox'">
            <input :id="field.column"
                class="toggle"
                :readonly="field.meta.readonly"
                @click="$emit('update')"
                v-model="field.value"
                type="checkbox"
                :disabled="field.meta.disabled">
            <label :for="field.column" class="toggle-input"><i></i></label>
        </span>
    </span>

</template>

<script>

export default {
    props: {
        field: {
            type: Object,
            required: true,
        },
        hasError: {
            type: Boolean,
            default: false,
        },
    },
};

</script>

<style>

    div.tile div.field label.switch {
        display: block;
        margin-top: 18px;
    }

</style>
