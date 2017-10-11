<template></template>

<script>

	import nprogress from 'nprogress';

	nprogress.configure({
	  template: '<div class="bar" role="bar"><div class="peg"></div></div>',
	  showSpinner: false,
	});

	export default {
		name: 'Nprogress',

		data() {
			return {
				nprogress: nprogress,
				latency: 50,
				requests: null,
				responses: null
			}
		},

		created() {
			this.init();

			axios.interceptors.request.use((config) => {
			    this.addRequest();
			    return config;
			});

			axios.interceptors.response.use((response) => {
			    this.addResponse();
			    return response;
			}, (error) => {
			    this.addResponse();
			    return Promise.reject(error);
			});

	        this.$router.beforeEach((route, from, next) => {
	        	this.addRequest();
	            next();
	        });

	        this.$router.afterEach(route => {
	        	let self = this;
	        	setTimeout(() => self.addResponse(), 1000);
	        });
		},

		methods: {
			init() {
		        this.requests = 0;
		        this.responses = 0;
		    },

		    done() {
		    	this.nprogress.done();
		    	this.init();
		    },

		    addRequest() {
	            this.requests++;
	            this.update();
		    },

		    addResponse() {
		    	setTimeout(() => {
		    		this.responses++;
		    		return this.responses >= this.requests
		    			? this.done()
		    			: this.update();
		    	}, this.latency);
		    },

		    update() {
		    	this.nprogress.set((this.responses / this.requests) - 0.1);
		    }
		},

		mounted() {
			this.$bus.$on('nprogress-add-request', () => this.addRequest());
			this.$bus.$on('nprogress-add-response', () => this.addResponse());
			this.$bus.$on('nprogress-done', () => this.done());
		}
	};

</script>

<style>

	#nprogress {
	    pointer-events: none;
	}

	#nprogress .bar {
	    background: #f44336;
	    box-shadow: 0 1px 5px #888888;
	    position: fixed;
	    z-index: 1051;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 3px;
	}

	#nprogress .peg {
	    display: block;
	    position: absolute;
	    right: 0px;
	    width: 100px;
	    height: 100%;
	    opacity: 1.0;
	}

</style>