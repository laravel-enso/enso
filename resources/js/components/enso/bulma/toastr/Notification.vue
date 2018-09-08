<template>

    <transition appear
        :enter-active-class="enterClass"
        :leave-active-class="leaveClass"
        @after-enter="hoverable = true"
        @after-leave="$destroy()">
        <div :class="[
                'notification toastr animated',
                { 'highlight': hover },
                type ? `is-${type}` : ''
            ]"
            @mouseenter="startHover"
            @mouseleave="stopHover"
            v-if="show || hover">
            <button class="delete"
                @click="close()"/>
             <article class="media">
                <div class="media-left">
                    <span class="icon is-large">
                        <fa :icon="displayIcon" size="2x"/>
                    </span>
                </div>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>{{ i18n(displayTitle) }}</strong>
                            <br>
                            {{ i18n(body) }}
                        </p>
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
import Titles from './config/titles';
import Icons from './config/icons';

const Container = 'toastr-wrapper';

export default {
    name: 'Notification',

    props: {
        type: {
            type: String,
            required: true,
            validator: val => Types.includes(val),
        },
        icon: {
            type: String,
            default: null,
        },
        title: {
            type: String,
            default: null,
        },
        body: {
            type: String,
            required: true,
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
    },

    data() {
        return {
            wrapper: null,
            hoverable: false,
            show: true,
            hover: false,
        };
    },

    computed: {
        toastrPosition() {
            return store.getters['preferences/toastrPosition'];
        },
        direction() {
            if (this.toastrPosition === 'top-center') return 'Down';
            if (this.toastrPosition === 'bottom-center') return 'Up';
            if (this.toastrPosition.indexOf('right') >= 0) return 'Right';
            return 'Left';
        },
        enterClass() {
            return `bounceIn${this.direction}`;
        },
        leaveClass() {
            if (this.direction === 'Down') {
                return 'bounceOutUp';
            }

            if (this.direction === 'Up') {
                return 'bounceOutDown';
            }

            return `bounceOut${this.direction}`;
        },
        containerClass() {
            return `${Container} ${this.toastrPosition.split('-').join(' ')}`;
        },
        containerSelector() {
            return `.${Container}`;
        },
        displayIcon() {
            return this.icon || Icons[this.type];
        },
        displayTitle() {
            return this.title || Titles[this.type];
        },
    },

    created() {
        const { containerClass } = this;
        const wrapper = document.querySelector(this.containerSelector);

        if (wrapper) {
            wrapper.className = containerClass;
            this.wrapper = wrapper.__vue__;
            return;
        }

        const ToastrWrapper = Vue.extend({
            name: 'ToastrWrapper',
            render(h) {
                return h('div', {
                    class: containerClass,
                });
            },
        });

        this.wrapper = new ToastrWrapper().$mount();
        document.body.appendChild(this.wrapper.$el);
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
            if (this.hoverable || this.show) {
                this.hover = true;
                clearTimeout(this.timer);
            }
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
            width: 20em;
            padding: .6em;
            margin-bottom: .25em;
            pointer-events: auto;
            position: relative;
            overflow-x: hidden;
            -webkit-box-shadow: 0 0 5px 3px hsla(0,0%,50%,.3);
            box-shadow: 0 0 5px 3px hsla(0,0%,50%,.3);

            &.highlight {
                -webkit-box-shadow: 0 0 5px 3px hsla(0,0%,4%,.3);
                box-shadow: 0 0 5px 3px hsla(0,0%,4%,.3);
            }

            .media-left {
                margin-right: .5rem
            }
        }
    }

</style>
