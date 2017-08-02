<template>

  	<div class="box box-primary">
	    <table class="text-center">
	        <tbody>
	            <tr>
	                <td colspan="3">
	                    <slot name="vue-filter-name">
	                    </slot>
	                </td>
	            </tr>
	            <tr>
	                <td>
	                    <input :name="'radio-' + _uid" @change="changed" type="radio" v-model="value" value="1">
	                        <label :for="'yes-' + _uid">
	                            <slot name="vue-filter-yes">
	                            </slot>
	                        </label>
	                    </input>
	                </td>
	                <td>
	                    <input :name="'radio-' + _uid" @change="changed" type="radio" v-model="value" value="0">
	                        <label :for="'no-' + _uid">
	                            <slot name="vue-filter-no">
	                            </slot>
	                        </label>
	                    </input>
	                </td>
	                <td>
	                    <input :name="'radio-' + _uid" @change="changed" type="radio" v-model="value" value="">
	                        <label :for="'n-a-' + _uid">
	                            <slot name="vue-filter-n-a">
	                            </slot>
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
		data: function() {
			return {
				value: ''
			};
		},

		methods: {
			changed: function() {
				this.$emit('input', this.value);
			}
		}
  	}

</script>