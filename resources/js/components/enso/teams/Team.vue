<template>
    <info-box :class="[
        'raises-on-hover',
        { 'is-danger': edit && !team.id },
        { 'is-warning': edit && team.id },
        { 'is-info': !edit && team.users.length === 0 },
    ]">
        <info-item>
            <label slot="left"
                class="label">
                <input class="input team-name"
                    v-focus
                    v-model="team.name"
                    v-if="edit">
                <strong v-else>{{ team.name }}</strong>
            </label>
            <div slot="right"
                class="has-text-right">
                <a class="button is-naked animated fadeIn"
                    v-if="!edit"
                    @click="edit = true">
                    <span class="icon">
                        <fa icon="pencil-alt" size="sm"/>
                    </span>
                </a>
                <span class="animated fadeIn"
                    v-else>
                    <a class="button is-naked is-outlined"
                        @click="$emit('cancel');edit = false">
                        <span class="icon">
                            <fa icon="ban"/>
                        </span>
                    </a>
                    <a class="button is-naked is-success is-outlined"
                        :disabled="!team.name"
                        @click="store();">
                        <span class="icon">
                            <fa icon="check" size="sm"/>
                        </span>
                    </a>
                    <a class="button is-naked is-danger is-outlined"
                        @click="destroy"
                        v-if="team.id !== null">
                        <span class="icon">
                            <fa icon="trash"/>
                        </span>
                    </a>
                </span>
            </div>
        </info-item>
        <div class="is-flex avatar-list">
            <figure class="image is-32x32 has-margin-right-small has-margin-bottom-small"
                v-for="user in team.users"
                :key="user.id"
                v-tooltip="user.name">
                <img class="is-rounded"
                    :src="avatar(user.avatar.id)">
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
                <vue-select v-model="team.userIds"
                    multiple
                    source="administration.users.selectOptions"
                    label="fullName"/>
            </div>
        </transition>
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
                    this.edit = null;
                    this.$emit('create', this.team);
                }).catch((error) => {
                    if (error.response.status === 422) {
                        this.$toastr.warning(this.__('Choose another name'));
                        return;
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
        width: 200px;

        border-top: unset;
        border-left: unset;
        border-right: unset;
        box-shadow: unset;
        border-radius: 0;

        &:focus {
            box-shadow: unset;
        }
    }

    .avatar-list {
        margin-left: 1em;
        flex-flow: wrap;

        figure {
            transition: margin 0.2s;
            -webkit-transition: margin 0.2s;
            transition: transform .2s;
            -webkit-transition: transform 0.2s;
            margin-left: -1em;

            &:hover {
                margin-left: -0.5em;
                margin-right: 1em;
                transform: scale(1.3);
                z-index: 2;
            }

            img {
                border: 2px solid #f4f6fb;
                border-radius: 50%;

                &:hover {
                    border: none;
                }
            }
        }
    }

</style>
