<template>

    <div class="input-group">
        <textarea class="form-control comment"
            v-focus
            v-inputor-on-focus
            v-if="isEditing || isNew"
            v-model="comment.body"
            :id="'textarea-' + _uid">
        </textarea>
        <div class="input-group-btn">
            <span v-if="isEditing">
                <i class="btn btn-xs bg-yellow fa fa-ban margin-right-xs"
                    @click="$emit('cancel-edit')">
                </i>
                <i class="btn btn-xs btn-success fa fa-check"
                    @click="$emit('update')"
                    v-if="comment.body.trim()">
                </i>
            </span>
            <span v-if="isNew">
                <i class="btn btn-xs bg-yellow fa fa-ban margin-right-xs"
                    @click="$emit('cancel-add')">
                </i>
                <i class="btn btn-xs btn-success fa fa-plus"
                    @click="$emit('post')"
                    v-if="comment.body.trim()">
                </i>
            </span>
        </div>
    </div>

</template>

<script>

    export default {
        props: {
            comment: {
                type: Object
            },
            isNew: {
                type: Boolean,
                required: true
            },
            isEditing: {
                type: Boolean,
                required: true
            }
        },

        computed: {
            hasText() {
                return this.comment.body.trim();
            }
        },

        directives: {
            inputorOnFocus: {
                inserted(el, binding, vnode) {
                    $(el).atwho({
                        at: "@",
                        searchKey: "fullName",
                        displayTpl: "<li id='${id}' name='${fullName}'><img src='/core/avatars/${avatarId}' alt='User Image' class='atwho'> ${fullName}</li>",
                        insertTpl: "@${fullName}",
                        acceptSpaceBar: true,
                        callbacks: {
                            remoteFilter: _.debounce((query, callback) => {
                                axios.get('/core/comments/getTaggableUsers/' + query).then(response => {
                                    callback(response.data);
                                });
                            }, 200)
                        }
                    });

                    $(el).on('inserted.atwho', (event, li, query) => {
                        vnode.context.comment.taggedUserList.push({
                            'id': $(li).attr('id'),
                            'fullName': $(li).attr('name')
                        });
                    });
                }
            },
            unbind(el, binding, vnode) {
                $(el).atwho('destroy');
            }
        },

        methods: {
            focus() {
                document.getElementById('textarea-' + this._uid).focus();
            }
        }
    }

</script>

<style>

    .atwho-view ul li > img {
        width: 25px;
        height: 25px;
    }

    textarea.comment {
        resize:vertical;
        font-size: 14px;
    }

</style>