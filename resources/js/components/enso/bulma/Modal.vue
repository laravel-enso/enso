<template>

    <transition enter-active-class="fadeIn"
        leave-active-class="fadeOut">
        <div :class="['modal animated', { 'is-active': show }]"
            v-if="show">
            <div class="modal-background"/>
            <div class="modal-content">
                <slot/>
            </div>
            <button class="modal-close is-large"
                aria-label="close"
                @click="$emit('close')"/>
        </div>
    </transition>

</template>

<script>

import Vue from 'vue';

export default {
    name: 'Modal',

    props: {
        show: {
            type: Boolean,
            required: true,
        },
        container: {
            type: String,
            default: 'modal-wrapper',
        },
    },

    data() {
        return {
            wrapper: null,
        };
    },

    computed: {
        wrapperSelector() {
            return `.${this.container}`;
        },
    },

    created() {
        const wrapper = document.querySelector(this.wrapperSelector);

        this.wrapper = wrapper
            ? wrapper.__vue__
            : this.mountWrapper();

        document.body.appendChild(this.wrapper.$el);
    },

    mounted() {
        this.wrapper.$el.appendChild(this.$el);
        document.addEventListener('keydown', this.closeOnEsc);
    },

    beforeDestroy() {
        document.removeEventListener('keydown', this.closeOnEsc);
    },

    methods: {
        mountWrapper() {
            const { container } = this;

            return new Vue({
                name: 'ModalWrapper',
                render(h) {
                    return h('div', {
                        class: container,
                    });
                },
            }).$mount();
        },
        closeOnEsc(e) {
            if (this.show && e.keyCode === 27) {
                this.$emit('close');
            }
        },
    },
};

</script>
