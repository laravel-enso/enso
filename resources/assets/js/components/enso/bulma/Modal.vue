<template>

    <transition enter-active-class="fadeIn"
        leave-active-class="fadeOut">
        <div :class="['modal animated', { 'is-active': show }]"
            v-if="show">
            <div class="modal-background"></div>
            <div class="modal-card"
                v-if="card">
                <header class="modal-card-head">
                    <slot name="header"></slot>
                </header>
                <section class="modal-card-body">
                    <slot name="body"></slot>
                </section>
                <footer class="modal-card-foot">
                    <slot name="footer"></slot>
                </footer>
            </div>
            <div v-else class="modal-content">
                <slot></slot>
            </div>
            <button class="modal-close is-large"
                aria-label="close"
                @click="$emit('close')">
            </button>
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
        card: {
            type: Boolean,
            default: false,
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
        containerSelector() {
            return `.${this.container}`;
        },
    },

    created() {
        const wrapper = document.querySelector(this.containerSelector);

        if (!wrapper) {
            const { container } = this;
            const ModalWrapper = Vue.extend({
                name: 'ModalWrapper',
                render(h) {
                    return h('div', {
                        class: container,
                    });
                },
            });

            this.wrapper = new ModalWrapper().$mount();
            document.body.appendChild(this.wrapper.$el);
        } else {
            this.wrapper = wrapper.__vue__;
        }
    },

    mounted() {
        this.wrapper.$el.appendChild(this.$el);
        document.addEventListener('keydown', this.closeOnEsc);
    },

    beforeDestroy() {
        document.removeEventListener('keydown', this.closeOnEsc);
    },

    methods: {
        closeOnEsc(e) {
            if (this.show && e.keyCode === 27) {
                this.$emit('close');
            }
        },
    },
};

</script>
