<template>
    <div class="wrapper">
        <div class="level is-hoverable is-marginless has-padding-large is-mobile"
            v-for="(item, index) in items"
            :key="index">
            <div class="item has-padding-small">
                <input type="checkbox"
                    :id="'checkbox-' + _uid + '-' + item.id"
                    :name="'checkbox-' + _uid + '-' + item.id"
                    :value="item.id"
                    v-model="checkedIds"
                    class="is-checkradio is-info">
                <label :for="'checkbox-' + _uid + '-' + item.id">
                    {{ item.description }}
                </label>
            </div>
            <div class="level-right">
                <span class="tag is-small is-info is-bold has-margin-right-medium"
                    v-if="item.is_default">
                    {{ __('Default') }}
                </span>
                <span class="tag is-small is-link is-bold has-margin-right-medium"
                    v-if="item.menu">
                    {{ __('Menu') }}
                </span>
                <span class="tag is-small is-warning is-bold"
                    v-if="item.type">
                    {{ __('Write') }}
                </span>
                <span class="tag is-small is-success is-bold"
                    v-if="!item.type">
                    {{ __('Read') }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>

import { Checked, Unchecked, Indeterminate } from './statuses';

export default {
    name: 'ContentManager',

    props: {
        items: {
            type: Array,
            required: true,
        },
        rolePermissions: {
            type: Array,
            required: true,
        },
    },

    data: () => ({
        checkedIds: [],
    }),

    computed: {
        permissionIds() {
            return this.items.map(item => item.id);
        },
        status() {
            if (this.checkedIds.length === this.permissionIds.length) {
                return Checked;
            }

            if (this.checkedIds.length === 0) {
                return Unchecked;
            }

            return Indeterminate;
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
        this.init();
    },

    mounted() {
        this.checkIfEmpty();
    },

    methods: {
        init() {
            this.checkedIds = this.permissionIds
                .filter(id => this.rolePermissions.indexOf(id) > -1);
        },
        checkAll() {
            this.checkedIds = JSON.parse(JSON.stringify(this.permissionIds));
            this.checkIfEmpty();
        },
        uncheckAll() {
            this.checkedIds = [];
            this.checkIfEmpty();
        },
        checkIfEmpty() {
            if (this.items.length === 0) {
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

<style lang="scss" scoped>

@import '~bulma/sass/utilities/initial-variables';
@import '~bulma/sass/utilities/derived-variables.sass';

    .level.is-hoverable {
        &:hover {
            background: $light;
        }

        .item {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
</style>
