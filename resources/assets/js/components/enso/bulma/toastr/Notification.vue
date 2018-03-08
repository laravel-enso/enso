<template>

    <transition appear
        :enter-active-class="enterClass"
        :leave-active-class="leaveClass"
        @after-enter="hoverable = true"
        @after-leave="$destroy()">
        <div :class="[
            'box notification toastr animated',
            { 'highlight': hover },
            type ? `is-${type}` : ''
        ]"
            v-if="show || hover"
            @mouseenter="startHover"
            @mouseleave="stopHover">
            <button class="delete"
                @click="close()"
                v-if="closeButton">
            </button>
             <article class="media">
                <div class="media-left">
                    <span class="icon is-large">
                        <fa :icon="icons[type]" size="2x"></fa>
                    </span>
                </div>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>{{ i18n(displayTitle) }}</strong>
                            <br>
                            {{ i18n(message) }}
                        </p>
                    </div>
                </div>
            </article>
        </div>
    </transition>

</template>

<script>

import Vue from 'vue';

import fontawesome from '@fortawesome/fontawesome';
import { faComment, faInfoCircle, faCheckCircle, faExclamationCircle, faTimesCircle }
    from '@fortawesome/fontawesome-free-solid/shakable.es';

fontawesome.library.add([
    faComment, faInfoCircle, faCheckCircle, faExclamationCircle, faTimesCircle,
]);

const types = ['message', 'primary', 'info', 'success', 'warning', 'danger'];
const positions = ['left', 'right', 'center'];
const icons = {
    message: faComment,
    primary: faComment,
    info: faInfoCircle,
    success: faCheckCircle,
    warning: faExclamationCircle,
    danger: faTimesCircle,
};
const titles = {
    message: 'Message',
    primary: 'Notification',
    info: 'Info',
    success: 'Success',
    warning: 'Warning',
    danger: 'Error',
};

export default {
    name: 'Notification',

    props: {
        type: {
            type: String,
            required: true,
            validator: val => types.includes(val),
        },
        title: {
            type: String,
            default: null,
        },
        message: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            default: 'right',
            validator: val => positions.includes(val),
        },
        duration: {
            type: Number,
            default: 3500,
            validator: val => val > 0,
        },
        closeButton: {
            type: Boolean,
            default: true,
        },
        container: {
            type: String,
            default: 'toastr-wrapper',
        },
        i18n: {
            type: Function,
            default: val => val,
        },
    },

    data() {
        return {
            wrapper: null,
            icons,
            hoverable: false,
            show: true,
            hover: false,
        };
    },

    computed: {
        direction() {
            if (this.position === 'center') return 'Down';
            if (this.position === 'right') return 'Right';
            return 'Left';
        },
        enterClass() {
            return `bounceIn${this.direction}`;
        },
        leaveClass() {
            return this.position === 'center'
                ? 'bounceOutUp'
                : `bounceOut${this.direction}`;
        },
        icon() {
            return this.icons[this.type];
        },
        containerClass() {
            return `${this.container} ${this.position}`;
        },
        containerSelector() {
            return `.${this.container}.${this.position}`;
        },
        displayTitle() {
            return this.title || titles[this.type];
        },
    },

    created() {
        const wrapper = document.querySelector(this.containerSelector);

        if (!wrapper) {
            const { containerClass } = this;

            const ToastrWrapper = Vue.extend({
                name: 'ToastrWrapper',
                render(h) {
                    return h('div', {
                        class: `${containerClass}`,
                    });
                },
            });

            this.wrapper = new ToastrWrapper().$mount();
            document.body.appendChild(this.wrapper.$el);
        } else {
            this.wrapper = wrapper.__vue__;
        }
    },

    mounted() {
        this.wrapper.$el.appendChild(this.$el);
        this.timer = setTimeout(() => this.hide(), this.duration);
    },

    methods: {
        hide() {
            clearTimeout(this.timer);
            this.hoverable = false;
            this.show = false;
        },
        close() {
            this.hover = false;
            this.show = false;
        },
        startHover() {
            if (!this.hoverable && !this.show) {
                return;
            }

            this.hover = true;
            clearTimeout(this.timer);
        },
        stopHover() {
            this.hover = false;
            this.timer = setTimeout(() => this.hide(), this.duration);
        },
    },
};

</script>

<style lang="scss">

    .toastr-wrapper {
        position: fixed;
        display: flex;
        flex-direction: column;
        z-index: 9999;
        pointer-events: none;
        top: 2em;

        &.left {
            margin-right: auto;
            left: 2em;
        }

        &.right {
            margin-left: auto;
            right: 2em;
        }

        &.center {
            margin-left: calc(50% - 150px);
        }

        .box.toastr.notification {
            width: 300px;
            padding: 12px;
            margin-bottom: 6px;
            pointer-events: auto;
            position: relative;
            z-index: 9999;
            position: relative;
            -webkit-box-shadow: 0 0 5px 3px hsla(0,0%,50%,.3);
            box-shadow: 0 0 5px 3px hsla(0,0%,50%,.3);

            &.highlight {
                -webkit-box-shadow: 0 0 5px 3px hsla(0,0%,4%,.3);
                box-shadow: 0 0 5px 3px hsla(0,0%,4%,.3);
            }
        }
    }

</style>
