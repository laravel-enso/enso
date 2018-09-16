import Quill from 'quill';

const Embed = Quill.import('blots/embed');

class MentionBlot extends Embed {
    static create(item) {
        const node = super.create();
        const mention = document.createElement('span');
        mention.innerHTML = item.value;
        node.appendChild(mention);
        node.dataset.id = item.id;
        node.dataset.value = item.value;
        return node;
    }

    static value(domNode) {
        return {
            id: domNode.dataset.id,
            value: domNode.dataset.value,
        };
    }
}

MentionBlot.blotName = 'mention';
MentionBlot.tagName = 'span';
MentionBlot.className = 'mention';

Quill.register(MentionBlot);
