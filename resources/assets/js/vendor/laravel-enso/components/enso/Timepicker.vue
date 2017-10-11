<template>

	<div class="input-group timepicker">
		<i class="fa fa-times clear-button btn-box-tool"
			@click="clear()"
			v-if="clearButton">
		</i>
		<input :id="'input-' + _uid"
			v-timepicker
			type="text"
			:name="name"
			:class="inputClass"
			:value="value"
			:disabled="disabled">
		<span class="input-group-addon">
			<i class="fa fa-clock-o"></i>
		</span>
	</div>

</template>

<script>

	export default {
		props: {
			value: {
				type: String,
				default: ''
			},
			name: {
                type: String,
                default: null
            },
			disabled: {
				type: Boolean,
				default: false
			},
			inputClass: {
                type: String,
                default: 'form-control'
            },
		},

		directives: {
			timepicker: {
				inserted(element, binding, vnode) {
					vnode.context.element.timepicker({
						// template: false,
		                // showInputs: false,
		                defaultTime: false,
		                maxHours: 24,
		                showMeridian: false,
					}).on('changeTime.timepicker', function(event) {
						vnode.context.$emit('input', event.time.value);
					});
				}
			}
		},

		computed: {
			element() {
				return $("#input-" + this._uid);
			},
			clearButton() {
				return this.value && !this.disabled;
			}
		},

		methods: {
			clear() {
				this.element.timepicker('setTime', '');
				this.$emit('input', '');
			}
		}
	}

</script>

<style>

    .timepicker > i.clear-button {
    	float:right;
      	z-index: 10;
		position: absolute;
		right: 30px;
		cursor: pointer;
    }

    .timepicker > input {
    	text-align: left;
    }

</style>