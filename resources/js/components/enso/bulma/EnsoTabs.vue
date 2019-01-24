<template>
    <div>
        <div :class="['tabs is-toggle is-fullwidth', 'is-' + alignment, 'is-' + size]">
            <ul class="tab-list has-background-grey-light">
                <li :class="{ 'is-active': index === active }"
                    :key="index"
                    v-for="(tab, index) in tabs">
                    <a :class="{ 'has-background-white has-text-grey-dark': index === active }"
                        @click="select(index)"
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
    name: 'EnsoTabs',

    props: {
        alignment: {
            type: String,
            default: 'left',
            validator: value => ['left', 'centered', 'right']
                .includes(value),
        },
        size: {
            type: String,
            default: 'normal',
            validator: value => ['normal', 'small', 'medium', 'large']
                .includes(value),
        },
    },

    data: () => ({
        tabs: [],
        active: null,
        disabled: [],
    }),

    methods: {
        select(index) {
            this.$emit('selected', this.tabs[index]);
            this.activate(index);
        },
        activate(index) {
            if (this.active === index || this.disabled.includes(index)) {
                return;
            }

            this.active = index;
            this.$emit('activated', this.tabs[index]);
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

    .tabs.is-fullwidth.is-toggle {
        .tab-list {
            border-radius: 6px;

            li {
                padding: 0.5em;
            }

            .is-active > a {
                opacity: 1;
                font-weight: 600;
            }

            a {
                transition: background 0.3s;
                border: unset;
                border-radius: 6px;
                opacity: 0.7;

                &[disabled] {
                    opacity: .4;
                    cursor: not-allowed;
                }
            }
        }
    }

</style>
