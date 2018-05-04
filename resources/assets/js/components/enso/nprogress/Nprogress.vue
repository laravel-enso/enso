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
            nprogress,
            latency: 100,
            requests: 0,
            responses: 0,
        };
    },

    created() {
        this.setAxios();
        this.setRouter();
        this.listen();
    },

    methods: {
        setAxios() {
            axios.interceptors.request.use((config) => {
                this.incRequests();
                return config;
            });

            axios.interceptors.response.use((response) => {
                this.incResponses();
                return response;
            }, (error) => {
                this.incResponses();
                return Promise.reject(error);
            });
        },
        setRouter() {
            this.$router.beforeEach((route, from, next) => {
                this.incRequests();
                next();
            });

            this.$router.afterEach(() => {
                const self = this;
                setTimeout(() => self.incResponses(), 1200);
            });
        },
        listen() {
            this.$bus.$on('nprogress-add-request', () => this.incRequests());
            this.$bus.$on('nprogress-add-response', () => this.incResponses());
            this.$bus.$on('nprogress-done', () => this.done());
        },
        reset() {
            this.requests = 0;
            this.responses = 0;
        },
        done() {
            this.nprogress.done();
            this.reset();
        },
        incRequests() {
            this.requests++;
            this.update();
        },
        incResponses() {
            setTimeout(() => {
                this.responses++;

                return this.responses >= this.requests
                    ? this.done()
                    : this.update();
            }, this.latency);
        },
        update() {
            this.nprogress.set(this.responses / this.requests - 0.1);
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
