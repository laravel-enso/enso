import Message from './Message.vue';

let defaults = {
    duration: 3000,
    closeButton: true,
    container: 'toastr-wrapper',
    position: 'right',
};

export default {
    install(Vue, options) {
        const Toastr = Vue.extend(Message);

        defaults = Object.assign(defaults, options);

        Vue.prototype.$toastr = {
            default(message, title) {
                this.mount('default', message, title);
            },
            success(message, title) {
                this.mount('success', message, title);
            },
            warning(message, title) {
                this.mount('warning', message, title);
            },
            info(message, title) {
                this.mount('info', message, title);
            },
            error(message, title) {
                this.mount('danger', message, title);
            },
            mount(type, message, title) {
                (new Toastr({
                    propsData: {
                        ...defaults, type, message, title,
                    },
                })).$mount();
            },
        };
    },
};
