<template>

    <div class="columns is-multiline has-padding-medium">
        <div class="column is-half"
            v-for="entry in groupData">
            <label class="checkbox">
                <input type="checkbox"
                    :value="entry.id"
                    v-model="checkedIds">
                <span :class="getClass(entry)">
                    {{ entry.description || entry.name }}
                </span>
                <span class="icon has-text-info"
                    v-if="entry.default">
                    <i class="is-icon fa fa-exclamation-triangle"
                        v-tooltip="__('Default')">
                    </i>
                </span>
            </label>
        </div>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: 'ManagerContent',

    props: {
        groupData: {
            required: true,
        },
        rolePermissions: {
            type: Array,
            required: true,
        },
    },

    computed: {
        ...mapGetters('locale', ['__']),
        permissionIds() {
            return this.groupData.pluck('id');
        },
        status() {
            if (this.checkedIds.length === this.permissionIds.length) {
                return 'checked';
            }

            if (this.checkedIds.length === 0) {
                return 'unchecked';
            }

            return 'indeterminate';
        },
    },

    watch: {
        status: {
            handler() {
                this.$emit(this.status);
            },
        },
        checkedIds() {
            this.removeGroupPermissions();
            this.addCheckedPermissions();
        },
    },

    data() {
        return {
            checkedIds: [],
        };
    },

    created() {
        this.setCheckedIds();
    },

    methods: {
        setCheckedIds() {
            const self = this;
            this.checkedIds = this.permissionIds
                .filter(id => self.rolePermissions.indexOf(id) > -1);
        },
        setAllChecked() {
            this.checkedIds = JSON.parse(JSON.stringify(this.permissionIds));
            this.checkIfEmpty();
        },
        setAllUnchecked() {
            this.checkedIds = [];
            this.checkIfEmpty();
        },
        getClass(entry) {
            if (!Object.prototype.hasOwnProperty.call(entry, 'type')) {
                return null;
            }

            return entry.type === 1 ? 'has-text-warning' : 'has-text-success';
        },
        checkIfEmpty() {
            if (this.groupData.length === 0) {
                this.$emit(this.status);
            }
        },
        removeGroupPermissions() {
            const self = this;

            this.permissionIds.forEach((id) => {
                const idx = self.rolePermissions.indexOf(id);

                if (idx !== -1) {
                    self.rolePermissions.splice(idx, 1);
                }
            });
        },
        addCheckedPermissions() {
            const self = this;

            this.checkedIds.forEach((id) => {
                self.rolePermissions.push(id);
            });
        },
    },

    mounted() {
        this.checkIfEmpty();
    },
};

</script>
