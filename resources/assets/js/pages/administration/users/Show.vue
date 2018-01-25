<template>

    <div v-if="initialised">
        <div class="box profile-heading">
            <div class="columns is-multiline">
                <div class="column is-half-desktop">
                    <div class="columns is-mobile">
                        <div class="column is-narrow">
                            <div class="image is-128x128">
                                <img :src="avatarLink">
                            </div>
                        </div>
                        <div class="column">
                            <div class="level">
                                <div class="level-item has-padding-top-small">
                                    <div>
                                        <p class="title is-3">{{ profileUser.fullName }}</p>
                                        <p>{{ __('role') }}: {{ profileUser.role.name }}</p>
                                        <p>{{ __('since') }}: {{ profileUser.created_at | timeFromNow }}</p>
                                        <p class="has-margin-top-small">
                                            <div class="level user-controls"
                                                v-if="isSelfVisiting">
                                                <div class="level-left">
                                                    <button class="button is-small is-warning"
                                                        v-if="avatarId"
                                                        @click="deleteAvatar">
                                                        <span class="icon">
                                                            <fa icon="trash-alt"></fa>
                                                        </span>
                                                        <span>
                                                            {{ __('Avatar') }}
                                                        </span>
                                                    </button>
                                                    <file-uploader v-if="!avatarId"
                                                        @upload-successful="$store.commit('setUserAvatar', $event.id)"
                                                        :url="uploadAvatarLink">
                                                        <template slot="upload-button"
                                                            slot-scope="props">
                                                            <button  class="button is-small is-info"
                                                                @click="props.openFileBrowser">
                                                                <span class="icon">
                                                                    <fa icon="upload"></fa>
                                                                </span>
                                                                <span>
                                                                    {{ __('Avatar') }}
                                                                </span>
                                                            </button>
                                                        </template>
                                                    </file-uploader>
                                                </div>
                                                <div class="level-right">
                                                    <button class="button is-small is-danger"
                                                        @click="logout()">
                                                        <span class="icon">
                                                            <fa icon="sign-out-alt"></fa>
                                                        </span>
                                                        <span>
                                                            {{ __('Log Out') }}
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div v-else>
                                                <button class="button is-small is-warning"
                                                    @click="$bus.$emit('start-impersonating', profileUser.id)"
                                                    v-if="!$store.state.impersonating">
                                                    {{ __('Impersonate') }}
                                                </button>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-half-desktop">
                    <div class="columns is-mobile">
                        <div class="column has-text-centered">
                          <p class="stat-value">{{ profileUser.loginCount }}</p>
                          <p class="stat-key">{{ __('logins') }}</p>
                        </div>
                        <div class="column has-text-centered has-lateral-borders">
                          <p class="stat-value">{{ profileUser.actionLogCount }}</p>
                          <p class="stat-key">{{ __('actions') }}</p>
                        </div>
                        <div class="column has-text-centered">
                          <p class="stat-value">{{ profileUser.rating }}</p>
                          <p class="stat-key">{{ __('rating') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns is-centered">
            <div class="column is-two-thirds-tablet">
                <div class="box">
                    <nav class="pagination is-small has-margin-bottom-large">
                        <a class="pagination-previous"
                            @click="getPage(profileUser.timeline.current_page - 1)"
                            :disabled="profileUser.timeline.prev_page_url===null">
                            {{ __('Previous') }}
                        </a>
                        <a class="pagination-next"
                            @click="getPage(profileUser.timeline.current_page + 1)"
                            :disabled="profileUser.timeline.next_page_url===null">
                            {{ __('Next') }}
                        </a>
                        <ul class="pagination-list" v-if="isShort">
                            <li v-for="i in profileUser.timeline.last_page"
                                :key="i">
                                <a class="pagination-link"
                                    :class="{ 'is-current': profileUser.timeline.current_page === i}"
                                    @click="getPage(i)">
                                    {{ i }}
                                </a>
                            </li>
                        </ul>
                        <ul class="pagination-list" v-if="isAtStart && !isShort">
                            <li v-for="i in 3"
                                :key="i">
                                <a class="pagination-link"
                                    :class="{ 'is-current': profileUser.timeline.current_page === i}"
                                    @click="getPage(i)">
                                    {{ i }}
                                </a>
                            </li>
                            <li><span class="pagination-ellipsis">&hellip;</span></li>
                            <li>
                                <a class="pagination-link"
                                    @click="getPage(profileUser.timeline.last_page)">
                                    {{ profileUser.timeline.last_page }}
                                </a>
                            </li>
                        </ul>
                        <ul class="pagination-list" v-if="hasMiddle && !isShort">
                            <li>
                                <a class="pagination-link"
                                    @click="getPage(1)">
                                    1
                                </a>
                            </li>
                            <li><span class="pagination-ellipsis">&hellip;</span></li>
                            <li>
                                <a class="pagination-link"
                                    @click="getPage(profileUser.timeline.current_page - 1)">
                                    {{ profileUser.timeline.current_page - 1 }}
                                </a>
                            </li>
                            <li>
                                <a class="pagination-link is-current">
                                    {{ profileUser.timeline.current_page }}
                                </a>
                            </li>
                            <li>
                                <a class="pagination-link"
                                    @click="getPage(profileUser.timeline.current_page + 1)">
                                    {{ profileUser.timeline.current_page + 1 }}
                                </a>
                            </li>
                            <li><span class="pagination-ellipsis">&hellip;</span></li>
                            <li>
                                <a class="pagination-link"
                                    @click="getPage(profileUser.timeline.last_page)">
                                    {{ profileUser.timeline.last_page }}
                                </a>
                            </li>
                        </ul>
                        <ul class="pagination-list" v-if="isAtEnd && !isShort">
                            <li>
                                <a class="pagination-link"
                                    @click="getPage(1)">
                                    1
                                </a>
                            </li>
                            <li><span class="pagination-ellipsis">&hellip;</span></li>
                            <li v-for="i in 3"
                                :key="i">
                                <a class="pagination-link"
                                    :class="{ 'is-current': profileUser.timeline.current_page === profileUser.timeline.last_page - 3 + i}"
                                    @click="getPage(profileUser.timeline.last_page - 3 + i)">
                                    {{ profileUser.timeline.last_page - 3 + i }}
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <ul class="timeline has-padding-large">
                        <div v-for="(actions, day) in timeline"
                            class="timeline-content"
                            :key="day">
                            <li class="timeline-header">
                                <span class="tag is-medium is-primary">{{ __(day) }}</span>
                            </li>
                            <!-- <li class="timeline-item">
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <p class="heading">January 2016</p>
                                    <p>Timeline content - Can include any HTML element</p>
                                </div>
                            </li> -->
                            <li class="timeline-item"
                                v-for="(action, index) in actions"
                                :key="index">
                                <div class="timeline-marker is-icon"
                                    :class="getClass(action.route)">
                                    <fa :icon="getIcon(action.route)" size="xs"></fa>
                                </div>
                                <div class="timeline-content">
                                    <p class="heading">{{ getHRDate(action.created_at) }} {{ getHRTime(action.created_at) }}</p>
                                    <p>{{ action.permission.description }}</p>
                                </div>
                            </li>
                        </div>
                        <li class="timeline-header"
                            v-if="profileUser.timeline.current_page === profileUser.timeline.last_page">
                            <span class="tag is-medium is-primary">{{ __('End') }}</span>
                        </li>
                        <li class="timeline-item"
                            v-else>
                            <div class="timeline-marker is-icon">
                                <fa icon="ellipsis-h" size="xs"></fa>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import { mapGetters, mapState } from 'vuex';
import { format } from 'date-fns';
import fontawesome from '@fortawesome/fontawesome';
import {
    faTrashAlt, faUpload, faSignOutAlt, faEllipsisH,
    faEye, faPlus, faPencilAlt,
} from '@fortawesome/fontawesome-free-solid/shakable.es';
import FileUploader from '../../../components/enso/fileuploader/FileUploader.vue';

fontawesome.library.add([
    faTrashAlt, faUpload, faSignOutAlt, faEllipsisH,
    faEye, faPlus, faPencilAlt,
]);

export default {
    components: { FileUploader },

    computed: {
        ...mapGetters('locale', {
            __: '__',
            locale: 'current',
        }),
        ...mapState(['user', 'meta']),
        uploadAvatarLink() {
            return route('core.avatars.store', [], false);
        },
        isSelfVisiting() {
            return this.user.id === this.profileUser.id;
        },
        avatarId() {
            if (this.isSelfVisiting) {
                return this.user.avatarId;
            }

            return this.profileUser.avatar ? this.profileUser.avatar.id : null;
        },
        avatarLink() {
            return route('core.avatars.show', (this.avatarId || 'null'), false);
        },
        timeline() {
            const actions = this.profileUser.timeline.data;

            return actions.map(action => action.created_at).reduce((days, record) => {
                days.push(this.getDay(record));
                return days;
            }, []).filter((value, index, days) => days.indexOf(value) === index)
                .reduce((timeline, day) => {
                    timeline[day] = actions
                        .filter(record => this.getDay(record.created_at) === day);
                    return timeline;
                }, {});
        },
        isShort() {
            return this.profileUser.timeline.last_page <= 5;
        },
        isAtStart() {
            return this.profileUser.timeline.current_page <= 2;
        },
        isAtEnd() {
            return this.profileUser.timeline.last_page
                - this.profileUser.timeline.current_page <= 2;
        },
        hasMiddle() {
            return !this.isAtStart && !this.isAtEnd;
        },
        paginationUrl() {
            return `${route('administration.users.show', [this.profileUser.id], false)}?page=`;
        },
    },

    data() {
        return {
            initialised: false,
            profileUser: {},
        };
    },

    watch: {
        locale: {
            handler() {
                this.getPage(this.profileUser.timeline.current_page);
            },
        },
    },

    methods: {
        deleteAvatar() {
            axios.delete(route('core.avatars.destroy', this.user.avatarId, false)).then(() => {
                this.$store.commit('setUserAvatar', null);
            }).catch(error => this.handleError(error));
        },
        logout() {
            axios.post(route('logout', [], false).toString()).then(() => {
                this.$store.dispatch('auth/logout');
            }).catch(error => this.handleError(error));
        },
        getDay(timestamp) {
            return format(timestamp, 'dddd');
        },
        getHRDate(timestamp) {
            return format(timestamp, this.meta.dateFormat);
        },
        getHRTime(timestamp) {
            return format(timestamp, 'H:mm');
        },
        getIcon(action) {
            if (action.indexOf('index') > 0) return faEye;
            if (action.indexOf('create') > 0) return faPlus;
            if (action.indexOf('edit') > 0) return faPencilAlt;
            return faTrashAlt;
        },
        getClass(action) {
            if (action.indexOf('index') > 0) return 'has-text-success';
            if (action.indexOf('create') > 0) return 'has-text-warning';
            if (action.indexOf('edit') > 0) return 'has-text-warning';
            return 'has-text-danger';
        },
        getPage(page) {
            axios.get(this.paginationUrl + page).then(({ data }) => {
                this.profileUser = data.user;
            }).catch(error => this.handleError(error));
        },
    },

    mounted() {
        axios.get(route(this.$route.name, this.$route.params.id, false)).then((response) => {
            this.profileUser = response.data.user;
            this.initialised = true;
        }).catch(error => this.handleError(error));
    },
};

</script>

<style>

    .has-lateral-borders {
        border-left: 1px solid rgba(0,0,0,0.2);
        border-right: 1px solid rgba(0,0,0,0.2);
    }

    .stat-value {
        font-size: 3em;
        padding-top: 12px;
    }

    .stat-key {
        font-size: 1.4em;
        font-weight: 200;
        padding-bottom: 8px;
    }

    .level.user-controls {
        margin-bottom: 0;
    }

    .timeline-content {
        transition:all 1s ease;
    }

</style>
