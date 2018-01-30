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
                    <a @click="setActive(index)">
                        <slot name="label"
                            :tab="tab">
                            {{ tab }}
                        </slot>
                    </a>
                </li>
            </ul>
        </div>
        <slot></slot>
    </div>
</template>

<script>

export default {
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
        default: {
            type: Number,
            default: 0,
        },
        label: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            tabs: [],
            active: this.default,
        };
    },

    methods: {
        setActive(index) {
            this.active = null;

            setTimeout(() => {
                if (this.active === index) {
                    return;
                }

                this.active = index;
            }, 500);
        },
    },
};

</script>
