<template>

  	<div class="box" :class="boxClass">
	    <table class="text-center">
	        <tbody>
	            <tr>
	                <td :colspan="options.length + 1">
	                    {{ title }}
	                </td>
	            </tr>
	            <tr>
	                <td v-for="option in options">
	                    <input :name="'radio-' + _uid"
	                    	@change="changed"
	                    	type="radio"
	                    	v-model="value" :value="option.value">
	                        <label class="vue-filter"
	                        	:for="'yes-' + _uid">
	                            {{ option.label }}
	                        </label>
	                    </input>
	                </td>
	                <td>
	                    <input :name="'radio-' + _uid"
	                    	@change="changed"
	                    	type="radio"
	                    	v-model="value" :value="null">
	                        <label class="vue-filter"
	                        	:for="'n-a-' + _uid">
	                            <i class="fa fa-power-off text-red"
	                            	:class="{ 'text-red': value === null, 'text-green': value !== null }">
                            	</i>
	                        </label>
	                    </input>
	                </td>
	            </tr>
	        </tbody>
	    </table>
	</div>

</template>

<script>

  	export default {
  		props: {
  			title: {
  				type: String,
  				default: null
  			},
  			theme: {
  				type: String,
  				default: 'primary'
  			},
  			options: {
  				type: Array,
  				default() {
  					return {};
  				}
  			}
  		},

  		computed: {
  			boxClass() {
  				return 'box-' + this.theme;
  			}
  		},

		data() {
			return {
				value: null
			};
		},

		methods: {
			changed() {
				this.$emit('input', this.value);
			}
		}
  	}

</script>

<style>

	label.vue-filter {
		margin-bottom: 0;
		margin-top: 3px;
	}

</style>