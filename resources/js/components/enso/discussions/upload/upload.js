import Quill from 'quill';

class Upload {
    constructor(quill, options) {
        this.quill = quill;
        this.quill.getModule('toolbar')
            .addHandler('image', options.handler);
    }
}

Quill.register('modules/upload', Upload);
