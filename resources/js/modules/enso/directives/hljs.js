import Vue from 'vue';
import hljs from 'highlight.js';

Vue.directive('hljs', {
    bind: el => hljs.highlightBlock(el.querySelector('code')),
    componentUpdated: el => hljs.highlightBlock(el.querySelector('code')),
});
