<template>
    <div class="field">
        <p class="control">
            <textarea class="textarea vue-comment"
                @keyup.shift.enter="$emit('save-comment')"
                v-focus
                v-inputor-on-focus
                v-model="comment.body"
                :placeholder="__('Type a new comment')">
            </textarea>
        </p>
    </div>

</template>

<script>

import { debounce } from 'lodash';
import { mapGetters } from 'vuex';

window.jQuery = require('jquery');

window.$ = window.jQuery;
require('at.js');
require('jquery.caret');
require('at.js/dist/css/jquery.atwho.min.css');

export default {
    props: {
        comment: {
            type: Object,
        },
    },

    computed: {
        ...mapGetters('locale', ['__']),
        hasText() {
            return this.comment.body.trim();
        },
    },

    directives: {
        inputorOnFocus: {
            inserted(el, binding, vnode) {
                $(el).atwho({
                    at: '@',
                    searchKey: 'fullName',
                    displayTpl: "<li id='${id}' name='${fullName}'><img src='/api/core/avatars/${avatarId}' alt='User Image' class='atwho'>${fullName}</li>",
                    insertTpl: '@${fullName}',
                    acceptSpaceBar: true,
                    callbacks: {
                        remoteFilter: debounce((query, callback) => {
                            axios.get(route('core.comments.getTaggableUsers', query, false))
                                .then(({ data }) => callback(data));
                        }, 200),
                    },
                });

                $(el).on('inserted.atwho', (event, li) => {
                    vnode.context.comment.body = el.value;

                    vnode.context.comment.taggedUserList.push({
                        id: $(li).attr('id'),
                        fullName: $(li).attr('name'),
                    });
                });
            },
        },
        unbind(el) {
            $(el).atwho('destroy');
        },
    },

    methods: {
        focus() {
            this.$el.focus();
        },
    },
};

</script>

<style lang="scss">

    .atwho-view ul li {
        display: flex;
        align-items: center;
    }

    .atwho-view ul li > img {
        width: 25px;
        height: 25px;
        margin-right: 5px
    }

    textarea.vue-comment {
        resize: none;
        overflow-y: auto;
        word-wrap: break-word;

        &:not([rows]) {
            min-height: 90px;
        }
    }

</style>
