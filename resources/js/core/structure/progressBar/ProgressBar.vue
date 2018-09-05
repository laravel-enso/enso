<template>
    <div class="progress-bar"
        :style="width"
        v-if="show"/>
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
                this.incRequests();
                return;
            }

            this.incResponses();
        },

        shouldStop(shouldStop) {
            if (shouldStop) {
                this.stop();
            }
        },
    },

    mounted() {
        if (this.shouldStop) {
            this.stop();
        }
    },

    methods: {
        init() {
            this.sent = 0;
            this.received = 0;
            this.show = false;
        },
        stop() {
            clearTimeout(this.timer);

            this.timer = setTimeout(() =>
                this.init(), this.latency * 2.5);
        },
        incRequests() {
            this.show = true;

            setTimeout(() => this.sent++, 1);
        },
        incResponses() {
            setTimeout(() => this.received++, this.latency);
        },
        startRouting() {
            this.init();
            setTimeout(() => this.incRequests(), this.latency);
        },
        stopRouting() {
            clearTimeout(this.routingTimer);

            this.routingTimer = setTimeout(() => this.incResponses(), this.latency * 2);
        },
    },
};

</script>

<style>

    .progress-bar {
        background: #f44336;
        box-shadow: 0 0 5px #f44336;
        position: absolute;
        left: 0px;
        top: 0px;
        height: 2px;
        width: 0vw;
        z-index: 9999;
        transition: width 0.5s;
    }

</style>
