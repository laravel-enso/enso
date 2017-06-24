<template>

	<label class="control-sidebar-subheading">
  		{{ label }}
  		<span class="pull-right">
      		<input :id="id"
                type="checkbox"
                class="toggle"
                v-model="state"
                @change="$emit('input', state)">
    		<label :for="id"><i></i></label>
		</span>
	</label>

</template>

<script>

	export default {

		props: {
			value: {
				type: Boolean,
				required: true
			},
			label: {
				type: String,
				required: true
			}
		},

		data() {
			return {
				state: this.value,
				id: 'switch-' + this._uid
			}
		}
	}

</script>