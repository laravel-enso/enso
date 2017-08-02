<template>

	<div class="input-group time-picker">
		<i class="fa fa-times clear-button btn-box-tool"
			@click="clearTime"
			v-if="showClearButton">
		</i>
		<input :id="'input-' + _uid"
			v-update-time-picker
			type="text"
			:name="name"
			class="form-control"
			:value="value"
			@input="emitInputEvent"
			@blur="hideWidget"
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
        	clearButton: {
        		type: Boolean,
        		default: false
        	},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			showClearButton: function() {
				return this.clearButton && this.value && !this.disabled;
			}
		},
		directives: {
			/* the directive is necessary to update the timepicker library
			* when the model is changed from the parent */
			updateTimePicker: {
				update: function (el) {
	  				let event = new Event('change');
					el.dispatchEvent(event);
  				}
			}
		},
		methods: {
			clearTime: function() {
				$("#input-" + this._uid).timepicker('setTime', '');
				this.$emit('input', '');
			},
			emitInputEvent: function (event) {
				this.$emit('input', event.target.value);
		    },
		    hideWidget: function() {
		    	$("#input-" + this._uid).timepicker('hideWidget');
		    }
		},
		mounted: function() {
			$('#input-' + this._uid).timepicker({
				// template: false,
                // showInputs: false,
                defaultTime: false,
                maxHours: 24,
                showMeridian: false,
			}).on('changeTime.timepicker', function() {
				//dispatch an input event that bubbles up so
				//vue updates the bound model
				let event = new Event('input');
		        $(this)[0].dispatchEvent(event);
			});
		}
	}

</script>

<style>

    .time-picker > i.clear-button {
      position: absolute;
      cursor: pointer;
      top: calc(50% - 12px);
      left: 2px;
      outline: none;
      z-index: 3;
      display: block;
    }
    .time-picker > i.clear-button:focus {
      opacity: .1;
    }
    .time-picker > input {
    	text-align: right;
    }

</style>