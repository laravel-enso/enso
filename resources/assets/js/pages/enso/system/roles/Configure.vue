<template>

    <div class="container">
    	<div class="columns is-centered">
    		<div class="column is-three-quarters">
		    	<div class="animated fadeIn"
			        v-if="initialised">
			        <center class="has-padding-bottom-large">
				        <h5 class="title is-5">{{ role.display_name }}</h5>
			        </center>
			        <checkbox-manager :title="__('Menus')"
			            :role-permissions="roleMenus"
			            :group-data="menus"
			            v-if="menus.length">
			        </checkbox-manager>

			        <checkbox-manager :title="__('Permisssions')"
			            :role-permissions="rolePermissions"
			            :group-data="permissions"
			            v-if="menus.length">
			        </checkbox-manager>
			        <button class="button is-success has-margin-top-large is-pulled-right"
			            @click="update">
			            {{ __("Update") }}
			        </button>
			        <div class="is-clearfix"></div>
			    </div>
		   	</div>
	   	</div>
    </div>

</template>

<script>

	import CheckboxManager from '../../../../components/enso/rolemanager/CheckboxManager.vue';
    import { mapGetters } from 'vuex';

    export default {
        components: { CheckboxManager },

        computed: {
            ...mapGetters('locale', ['__']),
        },

        data() {
            return {
            	roleId: this.$route.params.role,
            	role: {},
                menus: [],
                permissions: {},
                roleMenus: [],
                rolePermissions: [],
                initialised: false
            };
        },

        created() {
            this.getPermissions();
        },

        methods: {
            getPermissions() {
                axios.get(route('system.roles.getPermissions', this.roleId, false)).then(response => {
                    this.setData(response);
                    this.initialised = true;
                }).catch(error => {
                    this.handleError(error);
                });
            },
            setData(response) {
                this.menus = response.data.menus;
                this.roleMenus = response.data.roleMenus;
                this.rolePermissions = response.data.rolePermissions;
                this.permissions = response.data.permissions;
                this.role = response.data.role;
            },
            update() {
                axios.post(route('system.roles.setPermissions', [], false), this.postParams()).then((response) => {
                    toastr.success(response.data.message);
                }).catch(error => {
                    this.handleError(error);
                });
            },
            postParams() {
                return {
                    role_id: this.roleId,
                    roleMenus: this.roleMenus,
                    rolePermissions: this.rolePermissions,
                };
            }
        }
    }

</script>