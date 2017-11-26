<template>

    <card :title="title"
        :open="false"
        ref="card"
        :controls="1">
        <a slot="control-1" class="card-header-icon">
            <div class="checkbox-manager field">
                <input type="checkbox"
                    :id="'checkbox-' + _uid"
                    :name="'checkbox-' + _uid"
                    class="is-checkradio is-info"
                    @change="updateBelow">
                    <label :for="'checkbox-' + _uid"></label>
            </div>
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
            required: true,
        },
        groupData: {
            required: true,
        },
        rolePermissions: {
            type: Array,
            required: true,
        },
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
            return this.$el.querySelector('input[type=checkbox]');
        },
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
            const checked = this.$refs.children.filter(child => child.checkbox.checked).length;

            if (checked === this.$refs.children.length) {
                this.setChecked();
                return;
            }

            const indeterminate = this.$refs.children
                .filter(child => child.checkbox.indeterminate).length;

            if (checked || indeterminate) {
                this.setIndeterminate();
                return;
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
            const self = this;

            this.$refs.children.forEach((child) => {
                child.checkbox.checked = self.checkbox.checked;
                child.updateBelow();
            });
        },
    },
};

</script>

<style>

    div.field.checkbox-manager {
        width: 15px;
    }
</style>

