<template>

    <span>
        <input v-if="element.config.content === 'text'"
            :class="inputClass"
            :readonly="element.config.readonly"
            @keydown="$emit('update')"
            v-model="element.value"
            type="text"
            :disabled="element.config.disabled">
        <input v-if="element.config.content === 'email'"
            :class="inputClass"
            :readonly="element.config.readonly"
            @keydown="$emit('update')"
            v-model="element.value"
            type="email"
            :disabled="element.config.disabled">
        <input v-if="element.config.content === 'number'"
            :class="inputClass"
            :readonly="element.config.readonly"
            @keydown="$emit('update')"
            v-model="element.value"
            type="number"
            :step="element.config.step"
            :min="element.config.min"
            :max="element.config.max"
            :disabled="element.config.disabled">
        <span v-if="element.config.content === 'checkbox'">
            <input :id="element.column"
                class="toggle"
                :class="inputClass"
                :readonly="element.config.readonly"
                @click="$emit('update')"
                v-model="element.value"
                type="checkbox"
                :disabled="element.config.disabled">
            <label :for="element.column" class="toggle-input"><i></i></label>
        </span>
    </span>

</template>

<script>

    export default {
        props: {
            element: {
                type: Object,
                required: true
            },
            inputClass: {
                type: String,
                default: 'form-control'
            },
        }
    }

</script>