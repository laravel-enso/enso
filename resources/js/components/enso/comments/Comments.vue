<template>

    <div class="wrapper">
        <div class="controls"
            v-if="controls">
            <a class="button"
                @click="create()">
                <span v-if="!isMobile">
                    {{ __('Add Comment') }}
                </span>
                <span class="icon">
                    <fa icon="plus"/>
                </span>
            </a>
            <a class="button has-margin-left-small"
                @click="fetch()">
                <span v-if="!isMobile">
                    {{ __('Reload') }}
                </span>
                <span class="icon">
                    <fa icon="sync"/>
                </span>
            </a>
            <p class="control has-icons-left has-icons-right has-margin-left-large">
                <input class="input is-rounded"
                    type="text"
                    v-model="internalQuery"
                    :placeholder="__('Filter')">
                <span class="icon is-small is-left">
                    <fa icon="search"/>
                </span>
                <span class="icon is-small is-right clear-button"
                    v-if="internalQuery"
                    @click="internalQuery = ''">
                    <a class="delete is-small"/>
                </span>
            </p>
        </div>
        <div :class="{'has-margin-top-large': controls}">
            <comment is-new
                :id="id"
                :type="type"
                v-if="comment"
                :comment="comment"
                :index="-1"
                @cancel-add="comment = null"
                @save="add()"/>
            <comment v-for="(comment, index) in filteredComments"
                :comment="comment"
                :index="index"
                @save="update(comment)"
                @delete="destroy(index)"
                :key="index"/>
        </div>
    </div>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faSync, faSearch } from '@fortawesome/free-solid-svg-icons';
import { mapState } from 'vuex';
import Comment from './Comment.vue';

library.add(faPlus, faSync, faSearch);

export default {
    name: 'Comments',

    components: { Comment },

    props: {
        id: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        query: {
            type: String,
            default: null,
        },
        controls: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            comments: [],
            comment: null,
            loading: false,
            internalQuery: '',
            path: this.$route.path,
        };
    },

    computed: {
        ...mapState(['user']),
        ...mapState('layout', ['isMobile']),
        filteredComments() {
            const query = this.internalQuery.toLowerCase();

            return query
                ? this.comments.filter(({ body, owner }) =>
                    body.toLowerCase().indexOf(query) > -1
                    || owner.name.toLowerCase().indexOf(query) > -1)
                : this.comments;
        },
        count() {
            return this.filteredComments.length;
        },
        params() {
            return {
                commentable_id: this.id,
                commentable_type: this.type,
            };
        },
    },

    watch: {
        query() {
            this.internalQuery = this.query;
        },
    },

    created() {
        this.fetch();
    },

    methods: {
        fetch() {
            this.loading = true;

            axios.get(
                route('core.comments.index'),
                { params: this.params }
            ).then(({ data }) => {
                this.comments = data;
                this.loading = false;
                this.$emit('update');
            }).catch(error => this.handleError(error));
        },

        factory() {
            return {
                body: '',
                taggedUsers: [],
                owner: {
                    avatarId: this.user.avatar.id,
                    name: this.user.name,
                },
            };
        },
        create() {
            if (this.comment) {
                return;
            }

            this.comment = this.factory();
        },
        add() {
            if (!this.comment.body.trim()) {
                return;
            }

            this.loading = true;

            axios.post(
                route('core.comments.store'),
                this.postParams(),
            ).then(({ data }) => {
                this.comments.unshift(data.comment);
                this.comment = null;
                this.$emit('update');
                this.loading = false;
            }).catch(error => this.handleError(error));
        },
        postParams() {
            return {
                body: this.comment.body,
                taggedUsers: this.comment.taggedUsers,
                path: this.path,
                ...this.params,
            };
        },
        update(comment) {
            this.syncTaggedUsers(comment);
            comment.path = this.path;
            this.loading = true;

            axios.patch(
                route('core.comments.update', comment.id),
                comment,
            ).then(({ data }) => {
                Object.assign(comment, data);
                this.loading = false;
            }).catch(error => this.handleError(error));
        },
        syncTaggedUsers(comment) {
            comment.taggedUsers.forEach((user, index) => {
                if (!comment.body.includes(user.name)) {
                    comment.taggedUsers.splice(index, 1);
                }
            });
        },
        destroy(index) {
            this.loading = true;

            axios.delete(route('core.comments.destroy', this.comments[index].id))
                .then(() => {
                    this.comments.splice(index, 1);
                    this.$emit('update');
                    this.loading = false;
                }).catch(error => this.handleError(error));
        },
    },
};

</script>

<style scoped>

    .controls {
        display: flex;
        justify-content: center;
    }

</style>
