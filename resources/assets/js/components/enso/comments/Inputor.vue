<template>

    <div class="animated zoomIn atwho-wrapper"
        @keyup="filter"
        @keydown.up="onUp"
        @keydown.down="onDown"
        @keydown.enter="onEnter">
        <div class="atwho dropdown-menu"
            v-click-outside="hide"
            v-show="items.length">
            <div class="dropdown-content">
                <a :class="['dropdown-item', { 'is-active': index === position}]"
                    v-for="(item, index) in items"
                    :key="index"
                    @mousemove="position = index"
                    @click="selectItem">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-24x24">
                                <img :src="'/api/core/avatars/' + item.id" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content"
                                v-html="highlight(item.fullName)"/>
                        </div>
                    </article>
                </a>
            </div>
        </div>
        <div class="field">
            <p class="control">
                <textarea class="textarea vue-comment"
                    @keyup.shift.enter="$emit('save-comment')"
                    v-focus
                    v-model="comment.body"
                    :placeholder="__('Type a new comment')"/>
            </p>
        </div>
    </div>

</template>

<script>

import debounce from 'lodash/debounce';
import getCaretCoordinates from 'textarea-caret';
import vClickOutside from 'v-click-outside';

export default {
    name: 'Inputor',

    directives: {
        clickOutside: vClickOutside.directive,
    },

    props: {
        comment: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            items: [],
            position: null,
            query: null,
        };
    },

    computed: {
        hasText() {
            return this.comment.body.trim();
        },
        atwhoContainer() {
            return this.$el.querySelector('.atwho');
        },
        textarea() {
            return this.$el.querySelector('textarea');
        },
    },

    watch: {
        query() {
            if (this.query !== null) {
                this.fetch();
            }
        },
    },

    created() {
        this.fetch = debounce(this.fetch, 200);
    },

    methods: {
        fetch() {
            axios.get(route('core.comments.getTaggableUsers', this.query))
                .then(({ data }) => {
                    this.items = data;
                    if (this.items.length) {
                        this.position = 0;
                    }
                }).catch(error => this.handleError(error));
        },
        filter(event) {
            const arg = this.comment.body
                .substr(0, this.textarea.selectionEnd)
                .split(' ')
                .pop();

            const showAtwho = arg[0] === '@'
                && (this.comment.body.length === this.textarea.selectionEnd
                    || this.comment.body[this.textarea.selectionEnd] === ' ');

            if (!showAtwho) {
                this.hide();
            }

            if (showAtwho) {
                this.query = arg.substring(1);
                this.atwho(event);
            }
        },
        atwho(event) {
            const caret = getCaretCoordinates(event.target, event.target.selectionEnd);
            this.atwhoContainer.style.top = `${caret.top + 25}px`;
            this.atwhoContainer.style.left = `${caret.left - 15}px`;
        },
        onUp(event) {
            if (this.position > 0) {
                this.position--;
                event.preventDefault();
            }
        },
        onDown(event) {
            if (this.position < this.items.length - 1) {
                this.position++;
                event.preventDefault();
            }
        },
        onEnter(event) {
            if (this.position !== null) {
                this.selectItem();
                event.preventDefault();
            }
        },
        selectItem() {
            const { search, replace } = this.transform();

            this.comment.body = this.comment.body.replace(search, replace);

            this.tagUser();
            this.hide();

            this.$nextTick(() => {
                this.textarea.selectionEnd = replace.length;
            });
        },
        hide() {
            this.items = [];
            this.position = null;
            this.query = null;
        },
        transform() {
            const item = this.items[this.position];
            const cursorPosition = this.textarea.selectionEnd;
            let search = this.comment.body.substr(0, cursorPosition);
            const atPosition = search.lastIndexOf('@');

            if (this.comment.body[search.length] === ' ') {
                search += ' ';
            }

            let replace = search.substr(0, atPosition + 1) + item.fullName;
            replace += ' ';

            return { search, replace };
        },
        highlight(item) {
            return item
                .replace(new RegExp(`(${this.query})`, 'gi'), '<b>$1</b>');
        },
        tagUser() {
            const user = this.items[this.position];

            this.comment.taggedUserList.push({
                id: user.id,
                fullName: user.fullName,
            });
        },
    },
};

</script>

<style lang="scss" scoped>

    .atwho-wrapper {
        position: relative;

        .dropdown-menu {
            display: unset;
            top: unset;
            left: unset;
            min-width: unset;
            padding-top: unset;

            .dropdown-content {
                width: fit-content;
                padding: 0.25rem 0;

                a.dropdown-item {
                    padding: .1rem 0.5rem;
                }

                .media {
                    border-top: none;
                    padding-top: 0;

                    .media-left {
                        margin-right: 0.5rem;
                    }
                }
            }
        }

        textarea.vue-comment {
            resize: none;
            word-wrap: break-word;

            &:not([rows]) {
                min-height: 90px;
            }
        }
    }

</style>
