<template>

    <div class="container">
    	<div class="columns is-centered">
    		<div class="column is-three-quarters">
    			<vue-form :data="form"
	        		class="box animated fadeIn"
	        		v-if="initialised">
	        		<template slot="icon" scope="props">
	                    <div class="control has-icons-right">
				            <input class="input"
				                :class="{ 'is-danger': props.errors.has('icon') }"
				                @keydown="props.errors.clear(props.field.column)"
				                v-model="props.field.value"
				                type="text">
				            <span class="icon is-small is-right"
				                v-if="props.errors.has('icon')">
				                <i class="fa fa-warning"></i>
				            </span>
				            <span class="icon is-small is-right"
				                v-else>
				                <i :class="props.field.value"></i>
				            </span>
				        </div>
	                </template>
		        </vue-form>
    		</div>
    	</div>
    </div>

</template>

<script>

	import VueForm from '../../../../components/enso/vueforms/VueForm.vue';

	export default {
		components: { VueForm },

		data() {
			return {
				initialised: false,
				form: {}
			}
		},

		created() {
			axios.get(route(this.$route.name, null, false)).then(response => {
				this.form = response.data.form;
				this.initialised = true;
			}).catch(error => {
				this.handleError(error);
            });
		}
	};

</script>