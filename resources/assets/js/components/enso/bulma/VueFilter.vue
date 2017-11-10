<template>

    <div class="box" :class="boxClass">
        <table class="text-center">
            <tbody>
                <tr>
                    <td :colspan="options.length + 1">
                        <b>{{ title }}</b>
                    </td>
                </tr>
                <tr>
                    <td v-for="option in options">
                        <input :name="'radio-' + _uid"
                            @change="update"
                            type="radio"
                            v-model="internalValue" :value="option.value">
                            <label class="vue-filter"
                                v-html="option.label">
                            </label>
                        </input>
                    </td>
                    <td v-if="offSwitch">
                        <input :name="'radio-' + _uid"
                            @change="update"
                            type="radio"
                            v-model="internalValue" :value="null">
                            <label class="vue-filter">
                                <i class="fa fa-power-off text-red"
                                    :class="{ 'text-red': internalValue === null, 'text-green': internalValue !== null }">
                                </i>
                            </label>
                        </input>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
//fixme needs migration to bulma
export default {
    props: {
        title: {
            type: String,
            default: null,
        },
        theme: {
            type: String,
            default: 'primary',
        },
        options: {
            type: Array,
            default() {
                return {};
            },
        },
        value: {
            required: true,
        },
        offSwitch: {
            type: Boolean,
            default: true,
        },
    },

    data() {
        return {
            internalValue: this.value,
        };
    },

    computed: {
        boxClass() {
            return `box-${this.theme}`;
        },
    },

    methods: {
        update() {
            this.$emit('input', this.internalValue);
        },
    },
};

</script>

<style>

    label.vue-filter {
        margin-bottom: 0;
        margin-top: 3px;
    }

</style>
