<template>

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

</template>

<script>

import { mapGetters } from 'vuex';
import CheckboxManager from '../../../components/enso/rolemanager/CheckboxManager.vue';

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
            initialised: false,
        };
    },

    created() {
        this.get();
    },

    methods: {
        get() {
            axios.get(route('system.roles.getPermissions', [this.roleId], false)).then(({ data }) => {
                this.set(data);
                this.initialised = true;
            }).catch(error => this.handleError(error));
        },
        set(data) {
            this.menus = data.menus;
            this.roleMenus = data.roleMenus;
            this.rolePermissions = data.rolePermissions;
            this.permissions = data.permissions;
            this.role = data.role;
        },
        update() {
            axios.post(route('system.roles.setPermissions', [this.roleId], false), this.postParams()).then(({ data }) => {
                this.$toastr.success(data.message);
            }).catch(error => this.handleError(error));
        },
        postParams() {
            return {
                roleMenus: this.roleMenus,
                rolePermissions: this.rolePermissions,
            };
        },
    },
};

</script>
