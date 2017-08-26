<template>

	<div class="info-box"
		:class="theme">
		<span class="info-box-icon">
			<i :class="icon"></i>
		</span>
		<div class="info-box-content">
			<slot>
				<span class="info-box-text">{{ text }}</span>
				<span class="info-box-number">{{ number }}</span>
				<div class="progress">
	                <div class="progress-bar"
                        :style="{'width': progress + '%'}">
                    </div>
				</div>
				<span class="progress-description">
                    {{ description }}
            	</span>
			</slot>
		</div>
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
            text: {
            	type: String,
            	default: null
            },
            number: {
            	type: String,
            	default: null
            },
            progress: {
            	type: String,
            	default: false
            },
            description: {
            	type: String,
            	default: false
            }
		},

		data() {
			return {
				labels: Store ? Store.labels : ''
            };
		}
	};

</script>