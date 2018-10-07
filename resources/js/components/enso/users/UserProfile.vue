<template>
    <div class="box has-padding-medium is-raised"
        v-if="profile">
        <h4 class="title is-4 has-text-centered has-margin-top-large">
            <span class="icon">
                <fa icon="user"
                    size="xs"/>
            </span>
            {{ profile.person.name }}
            <span v-if="profile.person.appellative">
                ({{ profile.person.appellative }})
            </span>
        </h4>
        <hr>
        <div class="columns">
            <div class="column">
                <div class="columns is-mobile">
                    <div class="column">
                        <figure class="image is-128x128 avatar">
                            <img class="is-rounded is-raised"
                                :src="avatarLink">
                        </figure>
                    </div>
                    <div class="column">
                        <div class="has-margin-top-small field controls">
                            <a class="button is-fullwidth is-primary"
                                v-if="isSelfVisiting"
                                @click="updateAvatar">
                                <span class="icon">
                                    <fa icon="sync-alt"/>
                                </span>
                                <span>
                                    {{ __('Avatar') }}
                                </span>
                            </a>
                            <file-uploader @upload-successful="setUserAvatar($event.id)"
                                :url="uploadAvatarLink"
                                file-key="avatar"
                                v-if="isSelfVisiting">
                                <template slot="upload-button"
                                    slot-scope="{ openFileBrowser }">
                                    <a class="button is-fullwidth is-info has-margin-top-small"
                                        @click="openFileBrowser">
                                        <span class="icon">
                                            <fa icon="upload"/>
                                        </span>
                                        <span>
                                            {{ __('Avatar') }}
                                        </span>
                                    </a>
                                </template>
                            </file-uploader>
                            <a class="button is-fullwidth is-danger has-margin-top-small"
                                @click="exit()"
                                v-if="isSelfVisiting">
                                <span class="icon">
                                    <fa icon="sign-out-alt"/>
                                </span>
                                <span>
                                    {{ __('Log out') }}
                                </span>
                            </a>
                            <button class="button is-fullwidth is-warning"
                                @click="$root.$emit('start-impersonating', profile.id)"
                                v-if="
                                    !isSelfVisiting
                                    && canAccess('core.impersonate.start')
                                    && !impersonating
                                ">
                                {{ __('Impersonate') }}
                            </button>
                            <a class="button is-fullwidth has-margin-top-small is-warning"
                                @click="$router.push({
                                    name: 'administration.users.edit',
                                    params: { id: profile.id },
                                })"
                                v-if="canAccess('administration.users.edit')">
                                <span class="icon">
                                    <fa icon="pencil-alt"/>
                                </span>
                                <span>
                                    {{ __('Edit') }}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <hr v-if="isMobile">
                <div class="columns is-mobile is-multiline">
                    <div class="column is-one-third has-text-right">
                        <p class="has-margin-top-small"><strong>{{ __('Group') }}</strong></p>
                        <p class="has-margin-top-small"><strong>{{ __('Role') }}</strong></p>
                        <p class="has-margin-top-small"><strong>{{ __('Email') }}</strong></p>
                        <p class="has-margin-top-small"><strong>{{ __('Phone') }}</strong></p>
                        <p class="has-margin-top-small"><strong>{{ __('Birthday') }}</strong></p>
                        <p class="has-margin-top-small"><strong>{{ __('Gender') }}</strong></p>
                    </div>
                    <div class="column">
                        <p class="has-margin-top-small">{{ profile.group.name }}</p>
                        <p class="has-margin-top-small">{{ profile.role.name }}</p>
                        <p class="has-margin-top-small">{{ profile.email }}</p>
                        <p class="has-margin-top-small">{{ profile.person.phone || '---' }}</p>
                        <p class="has-margin-top-small">{{ dateFormat(profile.person.birthday) || '---' }} </p>
                        <p class="has-margin-top-small is-italic">
                            {{
                                profile.person.gender
                                    ? enums.genders[profile.person.gender]
                                    : '---'
                            }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="level is-mobile has-margin-top-medium">
            <div class="level-item has-text-centered has-right-border">
                <div>
                    <p class="stat-value">{{ profile.loginCount }}</p>
                    <p class="stat-key">{{ __('logins') }}</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <p class="stat-value">{{ profile.actionLogCount }}</p>
                    <p class="stat-key">{{ __('actions') }}</p>
                </div>
            </div>
            <div class="level-item has-text-centered has-left-border">
                <div>
                    <p class="stat-value">{{ profile.rating }}</p>
                    <p class="stat-key">{{ __('rating') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import { mapState, mapMutations } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faSyncAlt, faTrashAlt, faUpload, faSignOutAlt, faPencilAlt }
    from '@fortawesome/free-solid-svg-icons';
import FileUploader from '../filemanager/FileUploader.vue';
import format from '../../../modules/enso/plugins/date-fns/format';

library.add(faUser, faSyncAlt, faTrashAlt, faUpload, faSignOutAlt, faPencilAlt);

export default {
    name: 'UserProfile',

    components: { FileUploader },

    data() {
        return {
            profile: null,
        };
    },

    computed: {
        ...mapState(['user', 'meta', 'enums', 'impersonating']),
        ...mapState('auth', ['isAuth']),
        ...mapState('layout', ['isMobile']),
        uploadAvatarLink() {
            return route('core.avatars.store');
        },
        isSelfVisiting() {
            return this.user.id === this.profile.id;
        },
        avatarId() {
            return this.isSelfVisiting
                ? this.user.avatar.id
                : this.profile.avatar.id;
        },
        avatarLink() {
            return route('core.avatars.show', this.avatarId);
        },
    },

    created() {
        if (this.isAuth) {
            this.fetch();
        }
    },

    methods: {
        ...mapMutations(['setUserAvatar', 'initialise']),
        fetch() {
            axios.get(route(this.$route.name, this.$route.params.id))
                .then(response => (this.profile = response.data.user))
                .catch(error => this.handleError(error));
        },
        updateAvatar() {
            axios.patch(route('core.avatars.update', this.user.avatar.id))
                .then(({ data }) => this.setUserAvatar(data.avatarId))
                .catch(error => this.handleError(error));
        },
        exit() {
            axios.post('/api/logout').then(() => {
                this.profile = null;
                this.$store.commit('initialise', false);
                this.$store.commit('auth/logout');
                this.$router.push({ name: 'login' });
            }).catch((error) => {
                this.handleError(error);
            });
        },
        dateFormat(date) {
            return format(date, this.meta.dateFormat);
        },
    },
};

</script>

<style lang="scss" scoped>

    .avatar {
        margin: auto;
    }

    .controls, .details {
        justify-content: center;
    }

    .has-left-border {
        border-left: 1px solid rgba(0,0,0,0.2);
    }

    .has-right-border {
        border-right: 1px solid rgba(0,0,0,0.2);
    }

    .stat-value {
        font-size: 2em;
        padding-top: 12px;
    }

    .stat-key {
        font-size: 1.4em;
        font-weight: 200;
        padding-bottom: 8px;
    }

</style>
