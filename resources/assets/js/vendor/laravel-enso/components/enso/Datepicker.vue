<template>

	<div class="input-group flatpickr">
		<input type="text"
			:placeholder="placeholder"
			:id="'date-input-' + _uid"
			:name="name"
			:value="value"
			:class="inputClass"
			:disabled="disabled">
		<span class="input-group-addon">
			<a class="input-button"
				@click="picker.clear();$emit('clear')"
				v-if="value && !disabled">
				<i class="fa fa-times"></i>
			</a>
			<a class="input-button"
				@click="picker.open()">
				<i class="fa fa-clock-o"
					v-if="timeOnly">
				</i>
				<i class="fa fa-calendar"
					v-else>
				</i>
			</a>
		</span>
	</div>

</template>

<script>

	import Flatpickr from 'flatpickr';

	let FlatpickrL10ns = {
		ro: require("flatpickr/dist/l10n/ro.js").ro
	};

	Flatpickr.localize(FlatpickrL10ns[Store.user.preferences.global.lang]);

	export default {
		props: {
			value: {
				required: true,
				default: null,
				validate (value) {
		          	return value === null || typeof value === 'string'
		          		|| value instanceof Date || value instanceof Array;
		        }
			},
			name: {
				type: String,
				default: null
			},
			time: {
				type: Boolean,
				default: false
			},
			timeOnly: {
				type: Boolean,
				default: false
			},
			placeholder: {
				type: String,
				default: Store.labels.selectDate
			},
			disabled: {
				type: Boolean,
				default: false
			},
			format: {
				type: String,
				default: 'd-m-Y'
			},
			inputClass: {
                type: String,
                default: 'form-control'
            },
		},

		data() {
			return {
				picker: null,
			};
		},

		computed: {
			config(self = this) {
				return {
					weekNumbers: false,
					defaultDate: this.value,
					dateFormat: this.format,
					allowInput: false,
					clickOpens: true,
					noCalendar: this.timeOnly,
					enableTime: this.time || this.timeOnly,
					onChange(selectedDates, dateStr) {
						self.$emit('input', dateStr);
					}
				}
			}
		},

		watch: {
			value: {
				handler(newValue) {
					this.picker.setDate(newValue);
				},

				deep: true
			}
		},

		mounted() {
			this.picker = new Flatpickr("#date-input-" + this._uid, this.config);
		},

		beforeDestroy() {
			this.picker.destroy();
		}
	}

</script>

<style src="flatpickr/dist/themes/material_green.css"></style>

<style>

    a.input-button {
    	cursor: pointer;
    }

</style>