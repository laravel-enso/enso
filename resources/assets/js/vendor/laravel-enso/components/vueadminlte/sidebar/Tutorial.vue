<template>

	<label class="control-sidebar-subheading">
		{{ label }}
		<i class="pull-right fa fa-question"
			style="cursor: pointer;"
			@click="get()">
		</i>
	</label>

</template>

<script>

	var tutorialTemplate = '\
  	<div class="popover tour">\
		<div class="arrow"></div>\
		<p class="popover-title"></p>\
		<div class="popover-content"></div>\
		<div class="popover-navigation">\
			<button class="btn" data-role="prev">\
				<i class="fa fa fa-step-backward"></i>\
			</button>\
			<button class="btn" data-role="next">\
				<i class="fa fa-step-forward"></i>\
			</button>\
			<button class="btn margin-left-xs pull-right" data-role="end">\
				<i class="fa fa-stop"></i>\
			</button>\
		</div>\
	</div>\
	';

	export default {

		props: {
			label: {
				type: String,
				required: true
			}
		},

		data() {
			return {
				route: Store.route,
				template: tutorialTemplate,
				tutorialSteps: [],
				tour: null
			}
		},

		methods: {
			get() {
				axios.get('/system/tutorials/' + this.route).then(response => {
					this.tutorialSteps = response.data;
					this.init();
			    }).catch(error => {
		    		this.reportEnsoException(error);
		    	});
			},
			init() {
				let self = this;

				this.tour = new Tour({
		            backdrop: true,
		            template: self.template
		        });

		        this.tour.addSteps(self.tutorialSteps);

		        return this.isFirstTimeOnRoute() ? this.tour.start() : this.tour.restart();
			},
		    isFirstTimeOnRoute() {
		    	return localStorage.getItem('tour_end') !== "yes";
		    }
		},

		mounted() {
			if (this.isFirstTimeOnRoute()) {
				this.get();
			}
		}
	 }

</script>

<style>

	.popover.tour-tour {
		background: #22262e;
		color: white;
		border-radius: 0px;
		opacity: 0.9;
		box-shadow: 0 -2px 10px #888888;
	}

	.popover-title {
		background: #22262e;
		color: white;
		text-align: center;
		font-size: 13px;
	}

	.popover-content {
		font-size: 13px;
	}

	.popover.bottom > .arrow:after {
		border-bottom-color: red;
	}

	.popover.top > .arrow:after {
		border-top-color: red;
	}

	.popover.left > .arrow:after {
		border-left-color: red;
	}

	.popover.right > .arrow:after {
		border-right-color: red;
	}

</style>