<template>

    <vue-table class="is-raised is-rounded"
        :path="path"
        id="users">
        <figure class="image is-24x24 avatar"
            slot="avatarId"
            slot-scope="{ row }">
            <img class="is-rounded"
                :src="avatarLink(row.avatarId)"
                v-if="row.avatarId">
        </figure>
    </vue-table>

</template>

<script>

import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

export default {
    components: { VueTable },

    data() {
        return {
            path: route('administration.users.initTable'),
        };
    },

    methods: {
        avatarLink(id) {
            return route('core.avatars.show', id);
        },
    },
};

</script>

<style lang="scss" scoped>
    .avatar {
        margin:auto;
    }
</style>

