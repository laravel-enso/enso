<template>

    <card :title="title"
        :open="false"
        ref="card"
        :controls="1">
        <a slot="control-1" class="card-header-icon">
            <label class="checkbox">
                <input type="checkbox"
                    :id="'checkbox-' + _uid"
                    @change="updateBelow">
            </label>
        </a>
        <div class="has-padding-left-medium has-padding-top-medium has-padding-bottom-medium">
            <checkbox-manager v-for="group in sortedGroups"
                v-if="groupCount"
                ref="children"
                :title="group"
                :key="group"
                :group-data="groupData[group]"
                :role-permissions="rolePermissions"
                @update="update">
            </checkbox-manager>
            <manager-content v-if="isRoot"
                ref="content"
                :group-data="groupData"
                :role-permissions="rolePermissions"
                @checked="setChecked"
                @indeterminate="setIndeterminate"
                @unchecked="setUnchecked">
            </manager-content>
        </div>
    </card>

</template>

<script>

    import Card from '../bulma/Card.vue';
    import ManagerContent from './ManagerContent.vue';

    export default {
        name: 'CheckboxManager',

        components: { Card, ManagerContent },

        props: {
            title: {
                type: String,
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
                return this.isRoot ? null : Object.keys(this.groupData).length;
            },
            sortedGroups() {
                return this.isRoot ? null : Object.keys(this.groupData).sort();
            },
            checkbox() {
                return document.getElementById('checkbox-' + this._uid);
            }
        },

        methods: {
            setChecked() {
                this.checkbox.indeterminate = false;
                this.checkbox.checked = true;
                this.$emit('update');
            },
            setIndeterminate() {
                this.checkbox.checked = false;
                this.checkbox.indeterminate = true;
                this.$emit('update');
            },
            setUnchecked() {
                this.checkbox.checked = false;
                this.checkbox.indeterminate = false;
                this.$emit('update');
            },
            update() {
                let checked = this.$refs.children.filter(child => child.checkbox.checked).length;

                if (checked === this.$refs.children.length) {
                    return this.setChecked();
                }

                let indeterminate = this.$refs.children.filter(child => child.checkbox.indeterminate).length;

                if (checked || indeterminate) {
                    return this.setIndeterminate();
                }

                this.setUnchecked();
            },
            updateBelow() {
                return this.isRoot
                    ? this.updateContent()
                    : this.updateChildren();
            },
            updateContent() {
                return this.checkbox.checked
                    ? this.$refs.content.setAllChecked()
                    : this.$refs.content.setAllUnchecked();
            },
            updateChildren() {
                let self = this;

                this.$refs.children.forEach(child => {
                    child.checkbox.checked = self.checkbox.checked;
                    child.updateBelow();
                })
            }
        }
    }

</script>