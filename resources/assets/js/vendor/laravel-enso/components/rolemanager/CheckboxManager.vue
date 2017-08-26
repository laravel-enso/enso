<template>

    <div class="panel panel-default">
        <div :id="'heading-' + groupName + '-' + _uid"
            class="panel-heading"
            role="tab">
            <h4 class="panel-title">
                <a class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    :href="'#component-' + groupName + '-' + _uid"
                    aria-expanded="false">
                    {{ groupName }}
                </a>
                <div class="pull-right"
                    style="margin-bottom: 0; margin-top: -3px;">
                    <input type="checkbox"
                        :data-group-id="_uid"
                        :data-parent-group-id="$parent._uid"
                        @change="updateChildGroups">
                </div>
            </h4>
        </div>
        <div :id="'component-' + groupName + '-' + _uid"
            class="panel-collapse collapse"
            role="tabpanel">
            <div class="panel-group"
                :id="'accordion-group-' + _uid"
                role="tablist" aria-multiselectable="false"
                style="margin-left: 25px;margin-right:25px;margin-top:10px; padding-bottom: 10px"
                v-if="groupCount">
                <checkbox-manager v-for="group in sortedKeys"
                    ref="children"
                    :parent-accordion="'#accordion-group-' + _uid"
                    :group-name="group"
                    :group-data="groupData[group]"
                    :role-permissions="rolePermissions"
                    :key="group"
                    @state-updated="updateGroupState">
                </checkbox-manager>
            </div>
            <div class="panel-body"
                v-if="isRoot">
                <div class="row">
                    <div class="col-xs-6"
                        v-for="permission in groupData">
                        <div class="form-group permission-label">
                            <input type="checkbox"
                                :key="permission.id"
                                :value="permission.id"
                                v-model="checkedIds"
                                @change="updateCurrentGroupData">
                            <label :class="{'text-green': permission.type === 0, 'text-warning': permission.type === 1}">
                                {{ permission.description ? permission.description : permission.name }}
                            </label>
                            <span class="margin-left-xs"
                                v-if="permission.default">
                                <i v-tooltip="'Default'" class="fa fa-exclamation-triangle text-yellow"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'checkboxManager',

        props: {
            parentAccordion: {
                required: true
            },
            groupName: {
                required: true
            },
            groupData: {
                required: true
            },
            rolePermissions: {
                type: Array,
                required: true
            }
        },

        computed: {
            isRoot() {
                return Array.isArray(this.groupData);
            },
            groupCount() {
                return this.isRoot ? 0 : Object.keys(this.groupData).length;
            },
            permissionIds() {
                return this.isRoot ? this.groupData.pluck('id') : [];
            },
            sortedKeys() {
                return this.isRoot ? null : Object.keys(this.groupData).sort();
            }
        },

        data() {
            return {
                checkedIds: [],
            }
        },

        methods: {
            setCheckedIds() {
                let self = this;

                 this.checkedIds = this.permissionIds.filter(id => {
                    return self.rolePermissions.indexOf(id) > -1;
                });
            },
            updateGroupState() {
                if (this.isRoot) {
                    this.updateCurrentGroupState();
                } else {
                    this.updateChildGroupsState();
                }

                this.$emit('state-updated');
            },
            updateChildGroupsState() {
                let checkedLength = this.checkedChildGroupCount();

                if (checkedLength === this.groupCount) {
                    return this.setCheckedState('[data-group-id="' + this._uid + '"]');
                }

                if (checkedLength > 0) {
                    return this.setIndeterminateState('[data-group-id="' + this._uid + '"]');
                }

                if (this.indeterminateChildGroupCount() > 0) {
                    return this.setIndeterminateState('[data-group-id="' + this._uid + '"]');
                }

                this.setUncheckedState('[data-group-id="' + this._uid + '"]');
            },
            updateCurrentGroupState() {
                if (this.checkedIds.length === this.permissionIds.length) {
                    return this.setCheckedState('[data-group-id="' + this._uid + '"]');
                }

                if (this.checkedIds.length) {
                    return this.setIndeterminateState('[data-group-id="' + this._uid + '"]');
                }

                this.setUncheckedState('[data-group-id="' + this._uid + '"]');
            },
            checkedChildGroupCount() {
                return $('[data-parent-group-id="' + this._uid + '"]:checkbox:checked').length;
            },
            indeterminateChildGroupCount() {
                let indeterminateCount = 0;

                $('[data-parent-group-id="' + this._uid + '"]').each(function() {
                    if ($(this).prop('indeterminate')) {
                        indeterminateCount++;
                    }
                });

                return indeterminateCount;
            },
            updateCurrentGroupData() {
                this.removeGroupPermissions();
                this.addCheckedPermissions();
                this.updateGroupState();
            },
            removeGroupPermissions() {
                let self = this;

                this.permissionIds.forEach(id => {
                    let idx = self.rolePermissions.indexOf(id);

                    if (idx !== -1) {
                        self.rolePermissions.splice(idx, 1);
                    }
                });
            },
            addCheckedPermissions() {
                let self = this;

                this.checkedIds.forEach(id => {
                    self.rolePermissions.push(id);
                });
            },
            updateChildGroups() {
                let state = $('[data-group-id="' + this._uid + '"]').prop('checked') ? true : false;

                if (typeof this.groupData.length === 'undefined') {
                    this.$refs.children.forEach(ref => {
                        ref.selectGroup(state);
                    });
                }

                this.selectGroup(state);
            },
            selectGroup(state) {
                if (this.isRoot) {
                    this.checkedIds = state ? this.permissionIds :[];
                    this.updateCurrentGroupData();
                }
            },
            setCheckedState(checkbox) {
                $(checkbox).prop('checked', true);
                $(checkbox).prop('indeterminate', false);
            },
            setUncheckedState(checkbox) {
                $(checkbox).prop('checked', false);
                $(checkbox).prop('indeterminate', false);
            },
            setIndeterminateState(checkbox) {
                $(checkbox).prop('checked', false);
                $(checkbox).prop('indeterminate', true);
            },
        },

        mounted() {
            this.setCheckedIds();
            this.updateGroupState();
        }
    }

</script>

<style>

    div.permission-label {
        display:inline-flex;
    }

</style>