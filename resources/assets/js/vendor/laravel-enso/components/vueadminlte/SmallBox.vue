<template>

	<div class="small-box"
		:class="theme">
		<div class="inner">
			<slot>
				<h3>{{ title }}</h3>
				<p>{{ body }}</p>
			</slot>
		</div>
		<div class="icon">
			<i :class="icon"></i>
		</div>
		<a href="#"
			class="small-box-footer">
			<slot name="footer">
				{{ labels.more }}
				<i class="fa fa-arrow-circle-right"
					@click="$emit('load-more')">
				</i>
			</slot>
		</a>
	</div>

</template>

<script>

	export default {
		props: {
			theme: {
                type: String,
                required: true
            },
            icon: {
            	type: String,
            	default: null
            },
            title: {
            	type: String,
            	default: null
            },
            body: {
            	type: String,
            	default: null
            },
            overlay: {
            	type: Boolean,
            	default: false
            },
		},

		data() {
			return {
				labels: Store ? Store.labels : ''
            };
		}
	};

</script>