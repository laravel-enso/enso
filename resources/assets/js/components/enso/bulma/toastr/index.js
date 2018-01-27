import Notification from './Notification.vue';

let defaults = {
    duration: 4000,
    closeButton: true,
    container: 'toastr-wrapper',
    position: 'right',
};

export default {
    install(Vue, options) {
        const Toastr = Vue.extend(Notification);

        defaults = Object.assign(defaults, options);

        Vue.prototype.$toastr = {
            message(message, title, duration) {
                this.mount('message', message, title, duration);
            },
            primary(message, title, duration) {
                this.mount('primary', message, title, duration);
            },
            success(message, title, duration) {
                this.mount('success', message, title, duration);
            },
            warning(message, title, duration) {
                this.mount('warning', message, title, duration);
            },
            info(message, title, duration) {
                this.mount('info', message, title, duration);
            },
            error(message, title, duration) {
                this.mount('danger', message, title, duration);
            },
            mount(type, message, title, duration = defaults.duration) {
                (new Toastr({
                    propsData: {
                        ...defaults, type, message, title, duration,
                    },
                })).$mount();
            },
        };
    },
};
