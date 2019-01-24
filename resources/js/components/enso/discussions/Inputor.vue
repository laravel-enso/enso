<template>
    <div class="box has-background-light">
        <input class="input control is-large message-title"
            v-model="message.title"
            :placeholder="__('Title...')"
            v-if="title">
        <quill-editor :options="options"
            ref="quillEditor"
            v-model="message.body"/>
        <form ref="inputForm"
            @submit.prevent>
            <input id="file-upload"
                class="is-invisible"
                type="file"
                ref="fileInput"
                @change="upload($event)"
                v-if="attachments">
        </form>
        <button class="button"
            @click="$emit('cancel')">
            <span>{{ __('Cancel') }}</span>
            <span class="icon is-small">
                <fa icon="ban"/>
            </span>
        </button>
        <button class="button"
            @click="save"
            v-if="filled">
            <span v-if="message.id">
                {{ __('Update') }}
            </span>
            <span v-else>
                {{ __('Post') }}
            </span>
            <span class="icon is-small">
                <fa icon="check"/>
            </span>
        </button>
    </div>
</template>

<script>

import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

import { quillEditor } from 'vue-quill-editor';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faBan } from '@fortawesome/free-solid-svg-icons';

import './mention/mention';
import './upload/upload';
import './mention/mention.scss';

library.add(faCheck, faBan);

export default {
    name: 'Inputor',

    components: { quillEditor },

    props: {
        title: {
            type: Boolean,
            default: false,
        },
        attachments: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            required: true,
        },
        message: {
            type: Object,
            required: true,
        },
    },

    data: v => ({
        tribute: null,
        query: null,
        users: [],
        tagged: [],
        options: {
            theme: 'snow',
            placeholder: v.__(v.placeholder),
            modules: {
                toolbar: [
                    ['bold', 'italic', 'strike'],
                    v.attachments
                        ? ['blockquote', 'code-block', 'image', 'link']
                        : ['blockquote', 'code-block', 'link'],
                    [{ header: 1 }, { header: 2 }],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ align: [] }],
                    [{ color: [] }, { background: [] }, 'clean'],
                ],
                mention: {
                    template: item => v.template(item),
                },
                upload: {
                    handler: () => v.openFileBrowser(),
                },
            },
        },
    }),

    computed: {
        filled() {
            return (this.title
                ? this.message.title
                    && this.message.title.trim().length > 3
                : true)
                && this.message.body
                && this.message.body.trim().length > 10;
        },
    },

    methods: {
        openFileBrowser() {
            this.$refs.fileInput.click();
        },
        save() {
            if (this.message.id) {
                this.$emit('update', this.taggedUsers());
                return;
            }

            this.$emit('store', this.taggedUsers());
        },
        tag(user) {
            if (!this.tagged.find(({ id }) => id === user.id)) {
                this.tagged.push(user);
            }
        },
        taggedUsers() {
            return this.tagged.filter(user => this.message.body.indexOf(this.template(user)) > 0);
        },
        upload($event) {
            const Editor = this.$refs.quillEditor.quill;
            const formData = new FormData();

            formData.append('attachment', $event.target.files[0]);

            axios.post(route('core.discussions.upload'), formData)
                .then(({ data }) => {
                    Editor.insertEmbed(
                        Editor.getSelection().index,
                        'image',
                        route('core.discussions.showAttachment', data.id),
                    );

                    this.$refs.inputForm.reset();
                }).catch(error => this.handleError(error));
        },
        avatar(avatarId) {
            return route('core.avatars.show', avatarId);
        },
        template(user) {
            return `<img src="${route('core.avatars.show', user.avatar.id)}"> ${user.person.name}`;
        },
    },
};

</script>

<style lang="scss">

    .message-title {
        border: unset;
        box-shadow: unset;
        font-weight: bold;

        &:focus {
            box-shadow: unset;
        }
    }

    .quill-editor {
        .ql-toolbar.ql-snow {
            border-left: unset;
            border-right: unset;
            padding: 1rem;
        }

        .ql-container.ql-snow {
            height: unset;
            border: unset;
            min-height: 200px;
            font-size: unset;

            .ql-editor {
                height: unset;

                img {
            width: 1.4rem;
            height: 1.4rem;
            margin-bottom: -0.3rem;
            border-radius: 290486px;
        }
            }

            .ql-editor.ql-blank {
                height: unset;
            }
        }
    }

</style>
