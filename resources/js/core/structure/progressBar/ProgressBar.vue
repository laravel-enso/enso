<template>
    <transition enter-active-class="fadeIn"
        leave-active-class="fadeOut">
        <div class="progress-bar animated"
            :style="width"
            v-if="show"/>
    </transition>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: 'ProgressBar',

    data() {
        return {
            show: false,
            startingProgress: 10,
            latency: 200,
            sent: 0,
            received: 0,
            timer: null,
            routingTimer: false,
        };
    },

    computed: {
        ...mapGetters(['requests']),
        progress() {
            return this.sent
                ? this.startingProgress + (this.received / this.sent) * 90
                : 0;
        },
        shouldStop() {
            return this.received >= this.sent;
        },
        width() {
            return {
                width: `${this.progress}vw`,
            };
        },
    },

    watch: {
        requests(newVal, oldVal) {
            if (newVal > oldVal) {
                this.incRequests(newVal - oldVal);
                return;
            }

            this.incResponses(oldVal - newVal);
        },
    },

    methods: {
        reset() {
            this.show = false;
            this.sent = 0;
            this.received = 0;
        },
        update() {
            if (this.shouldStop) {
                clearTimeout(this.timer);

                this.timer = setTimeout(() =>
                    this.reset(), this.latency * 3);
            }
        },
        startRouting() {
            clearTimeout(this.routingTimer);
            this.reset();
            this.incRequests();
        },
        stopRouting() {
            clearTimeout(this.routingTimer);

            this.routingTimer = setTimeout(() =>
                this.incResponses(), this.latency * 4);
        },
        incRequests(inc = 1) {
            if (!this.show) {
                setTimeout(() => (this.show = true), 1);
            }

            setTimeout(() => (this.sent += inc), 2);
        },
        incResponses(inc = 1) {
            setTimeout(() => {
                this.received += inc;
                this.update();
            }, this.latency);
        },
    },
};

</script>

<style>

    .progress-bar {
        background: #f44336;
        box-shadow: 0 0 5px #f44336;
        position: fixed;
        left: 0px;
        top: 0px;
        height: 2px;
        width: 0vw;
        z-index: 9999;
        transition: width 0.5s;
    }

</style>
