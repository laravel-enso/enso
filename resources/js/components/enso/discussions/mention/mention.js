import Quill from 'quill';
import debounce from 'lodash/debounce';
import Keys from './constants/keys';
import './blots/mention';

const Options = {
    mentionChar: '@',
    allowedChars: /^[a-zA-Z0-9_]*$/,
    maxChars: 10,
    offsetTop: 2,
    offsetLeft: 0,
};

class Mention {
    constructor(quill, options) {
        this.options = Object.assign(Options, options);
        this.quill = quill;
        this.fetchItems = debounce(() => this.fetcher(), 200);

        this.init();
        this.setKeyboardHandlers();
        this.setQuillEvents();
    }

    init() {
        this.container = null;
        this.mentionList = null;
        this.itemIndex = 0;
        this.mentionCharPosition = null;
        this.cursorPosition = null;
        this.items = [];
        this.query = null;
    }

    setQuillEvents() {
        this.quill.on('text-change', (delta, oldDelta, source) => {
            if (source === 'user') {
                this.onChange();
            }
        });

        this.quill.on('selection-change', (range) => {
            if (range && range.length === 0) {
                this.onChange();
                return;
            }

            this.destroyMention();
        });
    }

    onChange() {
        const range = this.quill.getSelection();

        if (range === null) {
            return;
        }

        this.cursorPosition = range.index;

        const startPosition = Math.max(0, this.cursorPosition - this.options.maxChars);
        const textBefore = this.quill.getText(startPosition, this.cursorPosition - startPosition);
        const mentionCharIndex = textBefore.lastIndexOf(this.options.mentionChar);

        if (mentionCharIndex === 0 || (mentionCharIndex > 0 &&
            ['\n', ' ', '   '].includes(textBefore[mentionCharIndex - 1]))) {
            this.mentionCharPosition = this.cursorPosition -
                (textBefore.length - mentionCharIndex);

            this.query = textBefore.substring(mentionCharIndex + 1);

            if (this.queryIsValid()) {
                this.fetchItems();
                return;
            }
        }

        this.destroyMention();
    }

    fetcher() {
        axios.get(route('administration.users.options'), {
            params: { query: this.query, limit: 10 },
        }).then(({ data }) => this.renderList(data));
    }

    prioritizeKeyboardBinding(key) {
        this.quill.keyboard.bindings[key]
            .unshift(this.quill.keyboard.bindings[key].pop());
    }

    renderList(items) {
        if (!items || !items.length) {
            this.destroyMention();
            return;
        }

        this.createContainer();
        this.setItems(items);

        this.itemIndex = 0;
        this.selectItem();
        this.showMentionList();
    }

    createContainer() {
        if (this.container) {
            return;
        }

        this.container = document.createElement('div');
        this.container.className = 'mention-container';
        this.container.style.cssText = 'display: none; position: absolute;';

        this.mentionList = document.createElement('ul');
        this.mentionList.className = 'mention-list';
        this.container.appendChild(this.mentionList);

        document.body.appendChild(this.container);
    }

    onItemClick(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        this.itemIndex = e.currentTarget.dataset.index;
        this.selectItem();
        this.insertSelection();
    }

    setItems(items) {
        this.items = items;
        this.mentionList.innerHTML = '';
        for (let i = 0; i < this.items.length; i++) {
            const li = document.createElement('li');
            li.className = 'mention-item';
            li.innerHTML = this.options.template(this.highlight(this.items[i]));
            li.dataset.index = i;
            li.onclick = this.onItemClick.bind(this);
            this.mentionList.appendChild(li);
        }
    }

    showMentionList() {
        this.container.style.visibility = 'hidden';
        this.container.style.display = '';

        const { top, left } = this.getContainerPosition();

        this.container.style.top = `${top}px`;
        this.container.style.left = `${left}px`;
        this.container.style.visibility = 'visible';
    }

    getContainerPosition() {
        const containerPos = this.quill.container.getBoundingClientRect();
        const mentionCharPosition = this.quill.getBounds(this.mentionCharPosition);

        let top = window.pageYOffset +
            containerPos.top +
            mentionCharPosition.bottom +
            this.options.offsetTop;

        let left = window.pageXOffset +
            containerPos.left +
            mentionCharPosition.left +
            this.options.offsetLeft;

        if (this.containerExceedsVertically(top)) {
            const overMentionCharPos = window.pageYOffset
                + containerPos.top
                + mentionCharPosition.top;

            const containerHeight = this.container.offsetHeight
                + this.options.offsetTop;

            top = overMentionCharPos - containerHeight;
        }

        if (this.containerExceedsHorizontally(left)) {
            const containerWidth = this.container.offsetWidth
                + this.options.offsetLeft;

            const browserWidth = window.pageXOffset
                + document.documentElement.clientWidth;

            left = browserWidth - containerWidth;
        }

        return { top, left };
    }

    containerExceedsVertically(top) {
        return top + this.container.offsetHeight
            > window.pageYOffset + window.innerHeight;
    }

    containerExceedsHorizontally(left) {
        return left + this.container.offsetWidth
            > window.pageXOffset + document.documentElement.clientWidth;
    }

    selectItem() {
        for (let i = 0; i < this.mentionList.childNodes.length; i += 1) {
            this.mentionList.childNodes[i].classList.remove('selected');
        }
        this.mentionList.childNodes[this.itemIndex].classList.add('selected');
        const itemHeight = this.mentionList.childNodes[this.itemIndex].offsetHeight;
        this.container.scrollTop = this.itemIndex * itemHeight;
    }

    itemData() {
        return {
            id: this.items[this.itemIndex].id,
            value: this.options.template(this.items[this.itemIndex]),
        };
    }

    insertSelection() {
        this.quill.deleteText(
            this.mentionCharPosition,
            this.cursorPosition - this.mentionCharPosition,
        );

        this.quill.insertEmbed(
            this.mentionCharPosition,
            'mention',
            this.itemData(),
        );

        this.quill.insertText(this.mentionCharPosition + 1, ' ');
        this.quill.setSelection(this.mentionCharPosition + 2);
        this.destroyMention();
    }

    highlight(user) {
        if (!this.query) {
            return user;
        }

        user.person.name = user.person.name
            .replace(new RegExp(`(${this.query})`, 'gi'), '<b>$1</b>');

        return user;
    }

    destroyMention() {
        if (this.container) {
            this.container.remove();
            this.init();
        }
    }

    nextItem() {
        this.itemIndex = (this.itemIndex + 1) % this.items.length;
        this.selectItem();
    }

    prevItem() {
        this.itemIndex = ((this.itemIndex + this.items.length) - 1) % this.items.length;
        this.selectItem();
    }

    queryIsValid() {
        return this.query.length >= 0
            && this.options.allowedChars.test(this.query);
    }

    setKeyboardHandlers() {
        this.quill.keyboard.addBinding({
            key: Keys.TAB,
        }, () => {
            if (this.container) {
                this.insertSelection();
                return false;
            }
            return true;
        });

        this.prioritizeKeyboardBinding(Keys.TAB);

        this.quill.keyboard.addBinding({
            key: Keys.ENTER,
        }, () => {
            if (this.container) {
                this.insertSelection();
                return false;
            }
            return true;
        });

        this.prioritizeKeyboardBinding(Keys.ENTER);

        this.quill.keyboard.addBinding({
            key: Keys.ESCAPE,
        }, () => {
            if (this.container) {
                this.destroyMention();
                return false;
            }
            return true;
        });

        this.quill.keyboard.addBinding({
            key: Keys.UP,
        }, () => {
            if (this.container) {
                this.prevItem();
                return false;
            }
            return true;
        });

        this.quill.keyboard.addBinding({
            key: Keys.DOWN,
        }, () => {
            if (this.container) {
                this.nextItem();
                return false;
            }
            return true;
        });
    }
}

Quill.register('modules/mention', Mention);
