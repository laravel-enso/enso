<template>

    <textarea class="textarea is-full-width"
        @keyup.shift.enter="$emit('save-comment')"
        v-focus
        v-inputor-on-focus
        v-model="comment.body"
        rows="2">
    </textarea>

</template>

<script>

export default {
    props: {
        comment: {
            type: Object,
        },
    },

    computed: {
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
                        remoteFilter: _.debounce((query, callback) => {
                            axios.get(route('core.comments.getTaggableUsers', query, false)).then((response) => {
                                callback(response.data);
                            });
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

<style>

    .atwho-view ul li {
        display: flex;
        align-items: center;
    }

    .atwho-view ul li > img {
        width: 25px;
        height: 25px;
        margin-right: 5px
    }

</style>
