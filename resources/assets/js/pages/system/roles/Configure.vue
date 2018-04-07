<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters">
            <div class="animated fadeIn"
                v-if="data">
                <center class="has-padding-bottom-large">
                    <h5 class="title is-5">{{ data.role.display_name }}</h5>
                </center>
                <checkbox-manager :title="__('Menus')"
                    :role-permissions="data.roleMenus"
                    :group-data="data.menus"
                    v-if="data.menus.length">
                </checkbox-manager>

                <checkbox-manager :title="__('Permisssions')"
                    :role-permissions="data.rolePermissions"
                    :group-data="data.permissions"
                    v-if="data.menus.length">
                </checkbox-manager>
                <button class="button is-success has-margin-top-large is-pulled-right"
                    @click="update"
                    :disabled="!canAccess('system.roles.setPermissions')">
                    {{ __("Update") }}
                </button>
                <div class="is-clearfix"></div>
            </div>
            </div>
        </div>

</template>

<script>

import CheckboxManager from '../../../components/enso/rolemanager/CheckboxManager.vue';

export default {
    components: { CheckboxManager },

    data() {
        return {
            roleId: this.$route.params.role,
            data: null,
        };
    },

    created() {
        this.get();
    },

    methods: {
        get() {
            axios.get(route('system.roles.getPermissions', this.roleId))
                .then(({ data }) => {
                    this.data = data;
                }).catch(error => this.handleError(error));
        },
        update() {
            axios.post(
                route('system.roles.setPermissions', this.roleId),
                this.postParams(),
            ).then(({ data }) => {
                this.$toastr.success(data.message);
            }).catch(error => this.handleError(error));
        },
        postParams() {
            return {
                roleMenus: this.data.roleMenus,
                rolePermissions: this.data.rolePermissions,
            };
        },
    },
};

</script>
