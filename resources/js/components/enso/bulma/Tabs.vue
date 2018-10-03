<template>
    <div>
        <div :class="[
            'tabs', 'is-' + alignment, 'is-' + size, { 'is-boxed': boxed },
            { 'is-toggle': toggle || custom }, { 'is-toggle-rounded': toggleRounded },
            { 'is-fullwidth': fullwidth || custom }, { 'is-custom': custom }
        ]">
            <ul :class="[
                    'tab-list',
                    { 'has-background-grey-light' : custom }
                ]">
                <li v-for="(tab, index) in tabs"
                    :class="{ 'is-active': index === active }"
                    :key="index">
                    <a :class="{ 'has-background-white has-text-grey-dark': custom && index === active }"
                        @click="setActive(index)"
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
        custom: {
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
                this.$emit('selected', this.tabs[this.active]);
            }, 300);
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
    .tabs.is-fullwidth.is-toggle.is-custom {
        .tab-list {
            border-radius: 0.3em;

            li {
                padding: 0.5em;
            }

            .is-active {
                a {
                    opacity: 1;
                    font-weight: 600;
                }
            }

            a {
                transition: background 0.15s;
                transition: font-weight 0.15s;
                border: unset;
                border-radius: 0.3em;
                opacity: 0.5;
            }
        }
    }

    a[disabled] {
        opacity: .5;
        cursor: not-allowed;
    }

</style>
