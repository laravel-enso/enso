<template>
    <info-box :class="[
        { 'is-danger': edit && !team.id },
        { 'is-warning': edit && team.id },
        { 'is-info': !edit && team.users.length === 0 },

    ]">
        <info-item>
            <label slot="left"
                class="label">
                {{ __('Team') }}:
            </label>
            <div slot="right"
                class="field has-addons">
                <div class="control">
                    <input class="input has-text-centered team-name"
                        :readonly="!edit"
                        v-model="team.name">
                </div>
                <div class="control">
                    <a class="button"
                        v-if="!edit"
                        @click="edit = true">
                        <span class="icon">
                            <fa icon="pencil-alt" size="sm"/>
                        </span>
                    </a>
                    <button class="button"
                        :disabled="!team.name"
                        @click="store();edit = false"
                        v-else>
                        <span class="icon">
                            <fa icon="check" size="sm"/>
                        </span>
                    </button>
                </div>
            </div>
        </info-item>
        <div class="is-flex avatar-list">
            <figure class="image is-24x24 has-margin-right-small has-margin-bottom-small"
                v-for="user in team.users"
                :key="user.id"
                v-tooltip="user.fullName">
                <img class="is-rounded"
                    :src="avatar(user.avatarId)">
            </figure>
            <span v-if="!edit && !loading && team.users.length === 0"
                class="has-text-muted is-italic has-margin-bottom-small">
                {{ __('No users yet') }}
            </span>
        </div>
        <transition
            enter-active-class="fadeIn"
            leave-active-class="fadeOut">
            <div class="has-margin-bottom-large has-margin-top-large animated"
                v-if="edit && team.name">
                <label slot="left"
                    class="label">
                    {{ __('Members') }}:
                </label>
                <vue-select v-model="team.userList"
                    multiple
                    source="administration.users.selectOptions"
                    label="fullName"/>
            </div>
        </transition>
        <info-item>
            <div slot="left"
                v-if="edit">
                <button class="button is-small is-outlined"
                    @click="$emit('cancel');edit = false">
                    <span>
                        {{ __('Cancel') }}
                    </span>
                    <span class="icon is-small">
                        <fa icon="ban"/>
                    </span>
                </button>
            </div>
            <button slot="right"
                class="button is-small is-danger is-outlined"
                @click="destroy"
                v-if="edit && team.id !== null">
                <span>
                    {{ __('Delete') }}
                </span>
                <span class="icon is-small">
                    <fa icon="trash"/>
                </span>
            </button>
        </info-item>
    </info-box>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBan, faPencilAlt, faTrash, faCheck }
    from '@fortawesome/free-solid-svg-icons';
import { VTooltip } from 'v-tooltip';
import InfoBox from '../bulma/InfoBox.vue';
import InfoItem from '../bulma/InfoItem.vue';
import VueSelect from '../select/VueSelect.vue';

library.add([faBan, faPencilAlt, faTrash, faCheck]);
export default {
    name: 'Team',

    components: { InfoBox, InfoItem, VueSelect },

    directives: { tooltip: VTooltip },

    props: {
        team: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            loading: false,
            edit: this.team.id === null,
        };
    },

    methods: {
        store() {
            this.loading = true;

            axios.post(route('administration.teams.store'), this.team)
                .then(({ data }) => {
                    this.loading = false;
                    this.$toastr.success(data.message);
                    this.team.users = data.team.users;
                    this.team.id = data.team.id;
                    this.$emit('create', this.team);
                }).catch((error) => {
                    if (error.response.status === 422) {
                        this.$toastr.warning(this.__('Choose another name'));
                    }
                    this.handleError(error);
                });
        },
        destroy() {
            this.loading = true;

            axios.delete(route('administration.teams.destroy', this.team.id))
                .then(({ data }) => {
                    this.loading = false;
                    this.$toastr.success(data.message);
                    this.edit = false;
                    this.$emit('destroy');
                }).catch(error => this.handleError(error));
        },
        avatar(id) {
            return route('core.avatars.show', id);
        },
    },
};

</script>

<style lang="scss" scoped>

    .team-name {
        width: 150px;
    }

    .avatar-list {
        flex-flow: wrap;
    }

</style>
