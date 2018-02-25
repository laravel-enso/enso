<template>

    <div class="columns is-multiline has-padding-medium">
        <div class="column is-half"
            v-for="(entry, index) in groupData"
                :key="index">
            <div class="field">
                <input type="checkbox"
                    :id="'checkbox-' + entry.name"
                    :name="'checkbox-' + entry.name"
                    :value="entry.id"
                    v-model="checkedIds"
                    class="is-checkradio">
                    <label :for="'checkbox-' + entry.name">
                        <span :class="getClass(entry)">
                            {{ entry.description || entry.name }}
                        </span>
                        <span class="icon is-small has-text-info has-margin-left-medium"
                            v-if="entry.default"
                            v-tooltip="__('Default')">
                            <fa icon="exclamation-triangle"></fa>
                        </span>
                    </label>
            </div>
        </div>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';
import { VTooltip } from 'v-tooltip';
import fontawesome from '@fortawesome/fontawesome';
import { faExclamationTriangle } from '@fortawesome/fontawesome-free-solid/shakable.es';

fontawesome.library.add(faExclamationTriangle);

export default {
    name: 'ManagerContent',

    directives: { tooltip: VTooltip },

    props: {
        groupData: {
            type: Array,
            required: true,
        },
        rolePermissions: {
            type: Array,
            required: true,
        },
    },

    data() {
        return {
            checkedIds: [],
        };
    },

    computed: {
        ...mapGetters('locale', ['__']),
        permissionIds() {
            return this.groupData.map(group => group.id);
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

    created() {
        this.setCheckedIds();
    },

    mounted() {
        this.checkIfEmpty();
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
};

</script>
