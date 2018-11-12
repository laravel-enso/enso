<template>
    <editor class="editor wysiwyg"
        :extensions="extensions"
        :editable="editable"
        @init="$refs.editor.setContent(typeof value === 'string' ? value : '')"
        @update="$emit('input', $event.getHTML())"
        ref="editor">
        <div slot="menubar"
            slot-scope="{ nodes, marks, focus }"
            class="menubar">
            <div v-if="nodes && marks">
                <a :class="[
                        'button tiptap-button',
                        { 'is-active': marks.bold.active() },
                        { 'is-inactive': readonly }
                    ]" @click="marks.bold.command">
                    <span class="icon is-small">
                        <fa icon="bold"/>
                    </span>
                </a>
                <a :class="[
                        'button tiptap-button',
                        { 'is-active': marks.italic.active() },
                        { 'is-inactive': readonly }
                    ]" @click="marks.italic.command">
                    <span class="icon is-small">
                        <fa icon="italic" />
                    </span>
                </a>
                <a :class="[
                        'button tiptap-button',
                        { 'is-active': marks.strike.active() },
                        { 'is-inactive': readonly }
                    ]" @click="marks.strike.command">
                    <span class="icon is-small">
                        <fa icon="strikethrough"/>
                    </span>
                </a>
                <a :class="[
                        'button tiptap-button',
                        { 'is-active': marks.underline.active() },
                        { 'is-inactive': readonly }
                    ]" @click="marks.underline.command">
                    <span class="icon is-small">
                        <fa icon="underline"/>
                    </span>
                </a>
                <a :class="[
                        'button tiptap-button',
                        { 'is-active': marks.code.active() },
                        { 'is-inactive': readonly }
                    ]" @click="marks.code.command">
                    <span class="icon is-small">
                        <fa icon="terminal"/>
                    </span>
                </a>
                <a :class="[
                        'button tiptap-button',
                        { 'is-active': nodes.paragraph.active({ textAlign: 'left' }) }
                    ]" @click="nodes.paragraph.command({ textAlign: 'left' })">
                    <span class="icon is-small">
                        <fa icon="align-left"/>
                    </span>
                </a>
                <a :class="[
                        'button tiptap-button',
                        { 'is-active': nodes.paragraph.active({ textAlign: 'center' })}
                    ]" @click="nodes.paragraph.command({ textAlign: 'center' })">
                    <span class="icon is-small">
                        <fa icon="align-center" />
                    </span>
                </a>
                <a :class="[
                        'button tiptap-button',
                        { 'is-active': nodes.paragraph.active({ textAlign: 'right' })}
                    ]" @click="nodes.paragraph.command({ textAlign: 'right' })">
                    <span class="icon is-small">
                        <fa icon="align-right" />
                    </span>
                </a>
                <a :class="[
                        'button tiptap-button',
                        { 'is-active': nodes.paragraph.active() },
                        { 'is-inactive': readonly }
                    ]" @click="nodes.paragraph.command">
                    <span class="icon is-small">
                        <fa icon="paragraph"/>
                    </span>
                </a>
                <a :class="[
                        'button tiptap-button',
                        { 'is-active': nodes.heading.active({ level: 3 }) }, { 'is-inactive': readonly }
                    ]" @click="nodes.heading.command({ level: 3 })">
                    <span class="icon is-small">
                        <fa icon="heading"/>
                    </span>
                </a>
                <a :class="[
                        'button tiptap-button',
                        { 'is-active': nodes.bullet_list.active() },
                        { 'is-inactive': readonly }
                    ]" @click="nodes.bullet_list.command">
                    <span class="icon is-small">
                        <fa icon="list"/>
                    </span>
                </a>
                <a :class="[
                        'button tiptap-button',
                        { 'is-active': nodes.ordered_list.active() },
                        { 'is-inactive': readonly }
                    ]" @click="nodes.ordered_list.command">
                    <span class="icon is-small">
                        <fa icon="list-ol"/>
                    </span>
                </a>
                <a :class="[
                        'button tiptap-button',
                        { 'is-active': nodes.blockquote.active() },
                        { 'is-inactive': readonly }
                    ]" @click="nodes.blockquote.command">
                    <span class="icon is-small">
                        <fa icon="quote-right"/>
                    </span>
                </a>
                <a :class="[
                        'button tiptap-button',
                        { 'is-active': nodes.code_block.active() },
                        { 'is-inactive': readonly }
                    ]" @click="nodes.code_block.command">
                    <span class="icon is-small">
                        <fa icon="code"/>
                    </span>
                </a>
                <a :class="[
                        'button tiptap-button',
                        { 'is-active': nodes.todo_list.active() },
                        { 'is-inactive': readonly }
                    ]" @click="nodes.todo_list.command">
                    <span class="icon is-small">
                        <fa icon="check-square"/>
                    </span>
                </a>
                <a :class="[
                        'button tiptap-button',
                        { 'is-active': marks.link.active()}
                    ]" @click="showLinkMenu(marks.link)">
                    <span class="icon is-small">
                        <fa icon="link"/>
                    </span>
                </a>
                <a class="button tiptap-button"
                    @click="editable = !editable"
                    v-if="!readonly">
                    <span class="icon is-small">
                        <fa icon="glasses"
                            v-if="editable"/>
                        <fa icon="edit"
                            v-else/>
                    </span>
                </a>
            </div>
        </div>

        <div slot="menububble"
            slot-scope="{ marks, focus }"
            class="bubble">
            <template v-if="marks">
                <form class="link-form"
                    @submit.prevent="setLinkUrl(linkUrl, marks.link, focus)"
                    v-if="linkMenu">
                    <div class="control has-icons-right">
                        <input class="input"
                            type="text"
                            v-model="linkUrl"
                            placeholder="https://"
                            ref="linkInput"
                            @keydown.esc="hideLinkMenu">
                        <span class="icon is-small is-right clear-button">
                            <a class="delete is-small"
                                @click="setLinkUrl(null, marks.link, focus)"/>
                        </span>
                    </div>
                </form>
            </template>
        </div>

        <div slot="content"
            slot-scope="props"
            :class="['content wysiwyg-content', { 'is-danger': hasError }]"/>
    </editor>
</template>

<script>
import { Editor } from 'tiptap';
import {
    BlockquoteNode, CodeBlockNode, HardBreakNode, HeadingNode, OrderedListNode,
    BulletListNode, ListItemNode, TodoItemNode, TodoListNode, BoldMark,
    CodeMark, ItalicMark, LinkMark, StrikeMark, UnderlineMark, HistoryExtension,
} from 'tiptap-extensions';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faBold, faItalic, faStrikethrough, faUnderline, faCode, faParagraph, faList,
    faListOl, faQuoteRight, faLink, faCheckSquare, faGlasses, faEdit, faTerminal,
    faHeading, faAlignLeft, faAlignRight, faAlignCenter,
} from '@fortawesome/free-solid-svg-icons';
import ParagraphAlignment from './classes/Paragraph';

library.add([
    faBold, faItalic, faStrikethrough, faUnderline, faCode, faParagraph, faList,
    faListOl, faQuoteRight, faLink, faCheckSquare, faGlasses, faEdit, faTerminal,
    faHeading, faAlignLeft, faAlignRight, faAlignCenter,
]);

export default {
    name: 'Wysiwyg',

    components: { Editor },

    props: {
        value: {
            type: [String, Object],
            required: false,
            default: '',
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        hasError: {
            type: Boolean,
            default: false,
        },
    },

    data: v => ({
        linkUrl: null,
        linkMenu: false,
        editable: !v.readonly,
        extensions: [
            new BlockquoteNode(),
            new BulletListNode(),
            new CodeBlockNode(),
            new HardBreakNode(),
            new HeadingNode({ maxLevel: 3 }),
            new ListItemNode(),
            new OrderedListNode(),
            new TodoItemNode(),
            new TodoListNode(),
            new BoldMark(),
            new CodeMark(),
            new ItalicMark(),
            new LinkMark(),
            new StrikeMark(),
            new UnderlineMark(),
            new HistoryExtension(),
            new ParagraphAlignment(),
        ],
    }),

    methods: {
        showLinkMenu(type) {
            this.linkUrl = type.attrs.href;
            this.linkMenu = true;
            this.$nextTick(() => {
                this.$refs.linkInput.focus();
            });
        },
        hideLinkMenu() {
            this.linkUrl = null;
            this.linkMenu = false;
        },
        setLinkUrl(url, type, focus) {
            type.command({ href: url });
            this.hideLinkMenu();
            focus();
        },
    },
};
</script>

<style lang="scss">

    .menubar {
        margin-bottom: .5em;

        .button {
            background: 0;
            border: none;
            opacity: 0.6;
            -webkit-transition: opacity ease 0.3s;
            transition: opacity ease 0.3s;

            &:focus:not(:active) {
                -webkit-box-shadow: none;
                box-shadow: none;
            }

            &:hover {
                opacity: 1;
            }

            &.is-active {
                opacity: 1;
            }

            &.is-inactive {
                opacity: .3;
            }
        }
    }

    .content.wysiwyg-content {
        padding-bottom: calc(0.375em - 1px);
        padding-left: calc(0.625em - 1px);
        padding-right: calc(0.625em - 1px);
        padding-top: calc(0.375em - 1px);
        -webkit-box-shadow: inset 0 1px 2px hsla(0,0%,4%,.1);
        box-shadow: inset 0 1px 2px hsla(0,0%,4%,.1);
        border: 1px solid transparent;
        border-radius: 4px;
        -webkit-box-shadow: none;
        box-shadow: none;
        min-height: 5em;

        ul[data-type="todo_list"] {
            padding-left: 0;
        }

        li[data-type="todo_item"] {
            display: flex;
            flex-direction: row;
        }

        .todo-checkbox {
            border: 2px solid black;
            height: 0.9em;
            width: 0.9em;
            box-sizing: border-box;
            margin-right: 10px;
            margin-top: 0.3rem;
            user-select: none;
            -webkit-user-select: none;
            cursor: pointer;
            border-radius: 0.2em;
            background-color: transparent;
            transition: 0.4s background;
        }

        .todo-content {
            flex: 1;
        }

        li[data-done="true"] {
            text-decoration: line-through;
        }

        li[data-done="true"] .todo-checkbox {
            background-color: black;
        }

        li[data-done="false"] {
            text-decoration: none;
        }
    }

    .bubble {
        position: absolute;
        display: flex;
        z-index: 20;
        transform: translateX(-50%);
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.2s, visibility 0.2s;

        .link-form {
            display: flex;
            align-items: center;
            -webkit-box-shadow: 0 2px 18px 1px rgba(42,51,83,.2);
            box-shadow: 0 2px 18px 1px rgba(42,51,83,.2);

            .control.has-icons-right .icon.clear-button {
                pointer-events: all;
            }
        }
}

</style>
