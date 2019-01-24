<template>
    <div class="columns is-centered">
        <div class="column is-half is-three-fifths-desktop is-full-touch">
            <div class="animated fadeIn"
                v-if="data">
                <checkbox-manager class="is-rounded has-margin-top-large"
                    :title="`${data.role.display_name}'s ${__('Permissions')}`"
                    :role-permissions="data.rolePermissions"
                    :data="data.permissions"/>
                <button class="button is-success has-margin-top-large is-pulled-right"
                    @click="update"
                    :disabled="!canAccess('system.roles.setPermissions')">
                    {{ __("Update") }}
                </button>
                <div class="is-clearfix"/>
            </div>
        </div>
    </div>
</template>

<script>

import CheckboxManager from '../../../components/enso/rolemanager/CheckboxManager.vue';

export default {
    components: { CheckboxManager },

    data: () => ({
        data: null,
    }),

    created() {
        this.fetch();
    },

    methods: {
        fetch() {
            axios.get(route('system.roles.getPermissions', this.$route.params.role))
                .then(({ data }) => (this.data = data))
                .catch(error => this.handleError(error));
        },
        update() {
            axios.post(
                route('system.roles.setPermissions', this.$route.params.role),
                { rolePermissions: this.data.rolePermissions },
            ).then(({ data }) => this.$toastr.success(data.message))
                .catch(error => this.handleError(error));
        },
    },
};

</script>
