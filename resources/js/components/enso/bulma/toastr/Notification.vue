<template>

    <transition appear
        :enter-active-class="enterClass"
        :leave-active-class="leaveClass"
        @after-enter="hoverable = true"
        @before-leave="hoverable = false"
        @after-leave="$destroy()">
        <div :class="[
                'notification toastr animated',
                { 'highlight': hovering },
                type ? `is-${type}` : ''
            ]"
            @click="close"
            @mouseenter="startHovering"
            @mouseleave="stopHovering"
            v-if="visible">
            <div class="toastr-progress"
                :style="progressWidth"/>
             <article class="media">
                <div class="media-left">
                    <span class="icon is-small">
                        <fa :icon="icon" size="lg"/>
                    </span>
                </div>
                <div class="media-content">
                    <div class="content">
                        <p class="title is-5"
                            v-if="title">
                            {{ i18n(title) }}
                        </p>
                        <p class="subtitle is-6">{{ i18n(body) }}</p>
                    </div>
                </div>
            </article>
        </div>
    </transition>

</template>

<script>

import Vue from 'vue';
import store from '../../../../store';
import Types from './config/types';
import Icons from './config/icons';

export default {
    name: 'Notification',

    props: {
        body: {
            type: String,
            required: true,
        },
        container: {
            type: String,
            default: 'toastr-wrapper',
        },
        duration: {
            type: Number,
            default: 3500,
            validator: val => val > 0,
        },
        i18n: {
            type: Function,
            default(key) {
                return Object.keys(this.$options.methods).includes('__')
                    ? this.__(key)
                    : key;
            },
        },
        title: {
            type: String,
            default: null,
        },
        type: {
            type: String,
            required: true,
            validator: val => Types.includes(val),
        },
    },

    data() {
        return {
            hoverable: false,
            hovering: false,
            progress: 0,
            progressDelay: 10,
            visible: true,
            wrapper: null,
        };
    },

    computed: {
        wrapperClass() {
            return `${this.container} ${this.toastrPosition.split('-').join(' ')}`;
        },
        wrapperSelector() {
            return `.${this.container}`;
        },
        toastrPosition() {
            return store.getters['preferences/toastrPosition']
                || 'top-center';
        },
        direction() {
            if (this.toastrPosition === 'top-center') {
                return 'Down';
            }

            if (this.toastrPosition === 'bottom-center') {
                return 'Up';
            }

            return this.toastrPosition.indexOf('right') >= 0
                ? 'Right'
                : 'Left';
        },
        enterClass() {
            return `bounceIn${this.direction}`;
        },
        leaveClass() {
            if (this.direction === 'Down') {
                return 'bounceOutUp';
            }

            return this.direction === 'Up'
                ? 'bounceOutDown'
                : `bounceOut${this.direction}`;
        },
        icon() {
            return Icons[this.type];
        },
        progressWidth() {
            return {
                width: `${this.progress}%`,
            };
        },
        progressRate() {
            return 100 / (this.duration / this.progressDelay);
        },
    },

    created() {
        const wrapper = document.querySelector(this.wrapperSelector);

        this.wrapper = wrapper
            ? wrapper.__vue__
            : this.mountWrapper();

        this.wrapper.$el.className = this.wrapperClass;

        document.body.appendChild(this.wrapper.$el);
    },

    mounted() {
        this.wrapper.$el.appendChild(this.$el);
        this.startTimer();
    },

    methods: {
        mountWrapper() {
            return new Vue({
                name: 'ToastrWrapper',
                render: h => h('div'),
            }).$mount();
        },
        startHovering() {
            if (this.hoverable) {
                this.hovering = true;
                clearTimeout(this.timer);
                clearInterval(this.interval);
                this.progress = 0;
            }
        },
        stopHovering() {
            this.hovering = false;
            this.startTimer();
        },
        close() {
            this.hovering = false;
            this.visible = false;
            clearTimeout(this.timer);
            clearInterval(this.interval);
        },
        startTimer() {
            this.timer = setTimeout(() =>
                (this.visible = false), this.duration);

            this.interval = setInterval(() =>
                (this.progress += this.progressRate), this.progressDelay);
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

        &.top {
            top: 4em;
        }

        &.bottom {
            bottom: 4em;
        }

        &.left {
            margin-right: auto;
            left: 1em;
        }

        &.right {
            margin-left: auto;
            right: 1em;
        }

        &.center {
            margin-left: calc(50% - 10em);
        }

        .toastr.notification {
            display: flex;
            width: 20em;
            padding: .6em;
            pointer-events: auto;
            position: relative;
            overflow-x: hidden;
            cursor: pointer;
            -webkit-box-shadow: 0 0 5px 3px hsla(0,0%,50%,.4);
            box-shadow: 0 0 5px 3px hsla(0,0%,50%,.4);
            transition: box-shadow 0.2s ease-in-out;

            &:not(:last-child) {
                margin-bottom: .35em;
            }

            &.highlight {
                -webkit-box-shadow: 0 0 5px 3px hsla(0,0%,4%,.5);
                box-shadow: 0 0 5px 3px hsla(0,0%,4%,.3);
            }

            .media-left {
                margin-right: .5rem
            }

            .toastr-progress {
                position: absolute;
                left: 0px;
                top: 0px;
                height: 2px;
                width: 0%;
                background-color: #000000;
                opacity: 0.35;
            }

            .media {
                .media-left, .media-content {
                    margin-top: auto;
                    margin-bottom: auto;
                }
            }
        }
    }

</style>
