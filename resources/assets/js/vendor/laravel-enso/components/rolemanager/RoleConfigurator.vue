<template>

    <div class="row">
        <div class="col-xs-12">
            <center>
                <h5>
                    <slot name="menus-title"></slot>
                </h5>
            </center>
            <div id="accordion-menus"
                class="panel-group"
                role="tablist"
                aria-multiselectable="false">
                <checkbox-manager parent-accordion="#accordion-menus"
                    group-name="menus"
                    :role-permissions="roleMenus"
                    :group-data="menus"
                    v-if="menus.length">
                </checkbox-manager>
            </div>
        </div>
        <div class="col-xs-12">
            <center>
                <h5>
                    <slot name="permissions-title"></slot>
                </h5>
            </center>
            <div id="accordion-groups"
                class="panel-group"
                role="tablist"
                aria-multiselectable="false">
                <checkbox-manager v-for="group in sortedKeys"
                    :key="group"
                    parent-accordion="#accordion-groups"
                    :group-name="group"
                    :role-permissions="rolePermissions"
                    :group-data="permissions[group]">
                </checkbox-manager>
            </div>
        </div>
        <center>
            <button class="btn btn-primary"
                @click="setPermissions">
                <slot name="update-button"></slot>
            </button>
        </center>
    </div>

</template>

<script>

    export default {
        props: {
            roleId: {
                type: String,
                required: true
            }
        },

        computed: {
            sortedKeys() {
                return Object.keys(this.permissions).sort();
            }
        },

        data() {
            return {
                menus: [],
                permissions: {},
                roleMenus: [],
                rolePermissions: []
            };
        },

        methods: {
            getPermissions() {
                axios.get('/system/roles/getPermissions/' + this.roleId).then(response => {
                    this.setData(response);
                }).catch(error => {
                    this.reportEnsoException(error);
                });
            },
            setData(response) {
                this.menus = response.data.menus;
                this.roleMenus = response.data.roleMenus;
                this.rolePermissions = response.data.rolePermissions;
                this.permissions = response.data.permissions;
            },
            setPermissions() {
                axios.post('/system/roles/setPermissions', this.postParams()).then((response) => {
                    toastr.success(response.data.message);
                }).catch(error => {
                    this.reportEnsoException(error);
                });
            },
            postParams() {
                return {
                    role_id: this.roleId,
                    roleMenus: this.roleMenus,
                    rolePermissions: this.rolePermissions,
                };
            }
        },

        mounted() {
            this.getPermissions();
        }
    }

</script>