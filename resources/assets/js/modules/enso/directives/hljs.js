import hljs from 'highlight.js';

Vue.directive('hljs', {
    bind(el, binding) {
        let target = el.querySelector('code');
        hljs.highlightBlock(target);
    },
    componentUpdated(el, binding) {
        let target = el.querySelector('code');
        hljs.highlightBlock(target);
    }
});