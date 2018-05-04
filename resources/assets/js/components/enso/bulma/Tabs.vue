<template>
    <div>
        <div :class="[
            'tabs', 'is-' + alignment, 'is-' + size, { 'is-boxed': boxed },
            { 'is-toggle': toggle }, { 'is-toggle-rounded': toggleRounded },
            { 'is-fullwidth': fullwidth }
        ]">
            <ul>
                <li v-for="(tab, index) in tabs"
                    :class="{ 'is-active': index === active }"
                    :key="index">
                    <a @click="setActive(index)"
                        :disabled="disabled.includes(index)">
                        <slot name="label"
                            :tab="tab">
                            {{ tab }}
                        </slot>
                    </a>
                </li>
            </ul>
        </div>
        <slot/>
    </div>
</template>

<script>

export default {
    name: 'Tabs',

    props: {
        alignment: {
            type: String,
            default: 'left',
            validator: value => ['left', 'centered', 'right'].includes(value),
        },
        size: {
            type: String,
            default: 'normal',
            validator: value => ['normal', 'small', 'medium', 'large'].includes(value),
        },
        boxed: {
            type: Boolean,
            default: false,
        },
        toggle: {
            type: Boolean,
            default: false,
        },
        toggleRounded: {
            type: Boolean,
            default: false,
        },
        fullwidth: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            tabs: [],
            active: 0,
            disabled: [],
        };
    },

    methods: {
        setActive(index) {
            if (this.active === index || this.disabled.includes(index)) {
                return;
            }

            this.active = null;

            setTimeout(() => {
                this.active = index;
            }, 500);
        },
        disable(index) {
            if (!this.disabled.includes(index)) {
                this.disabled.push(index);
            }
        },
        enable(index) {
            const position = this.disabled
                .findIndex(position => position === index);

            if (position >= 0) {
                this.disabled.splice(position, 1);
            }
        },
    },
};

</script>

<style lang="scss" scoped>

    a[disabled] {
        opacity: .5;
        cursor: not-allowed;
    }

</style>

