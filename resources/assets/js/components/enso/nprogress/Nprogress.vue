<template>
    <div/>
</template>

<script>

import nprogress from 'nprogress';

nprogress.configure({ showSpinner: false });

export default {
    name: 'Nprogress',

    data() {
        return {
            latency: 100,
            requests: 0,
            responses: 0,
            routing: false,
            routingTimer: false,
            timer: null,
        };
    },

    computed: {
        progress() {
            return this.requests
                ? this.responses / this.requests - 0.1
                : 0;
        },
        shouldStop() {
            return this.responses >= this.requests;
        },
    },

    methods: {
        reset() {
            this.requests = 0;
            this.responses = 0;
            this.routing = false;
        },
        done() {
            clearTimeout(this.timer);

            this.timer = setTimeout(() => {
                nprogress.done();
                this.reset();
            }, this.latency * 10);
        },
        incRequests() {
            this.requests++;
            this.update();
        },
        incResponses() {
            setTimeout(() => {
                this.responses++;
                this.update();
            }, this.latency);
        },
        startRouting() {
            if (!this.routing) {
                this.routing = true;
                this.incRequests();
            }
        },
        stopRouting() {
            clearTimeout(this.routingTimer);

            this.routingTimer = setTimeout(() => {
                this.routing = false;
                this.incResponses();
            }, this.latency * 6);
        },
        update() {
            nprogress.set(this.progress);

            if (this.shouldStop) {
                this.done();
            }
        },
    },
};

</script>

<style>

    #nprogress .bar {
        background: #f44336;
        box-shadow: 0 0 5px #f44336;
        position: fixed;
        z-index: 1051;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
    }

    #nprogress .peg {
        display:block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        opacity: 1.0;
    }

</style>
