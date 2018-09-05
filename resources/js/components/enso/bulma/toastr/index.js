import Notification from './Notification.vue';

export default {
    install(Vue, options) {
        const Toastr = Vue.extend(Notification);

        Vue.prototype.$toastr = {
            message(body, title, duration) {
                this.mount('message', body, title, duration);
            },
            primary(body, title, duration) {
                this.mount('primary', body, title, duration);
            },
            success(body, title, duration) {
                this.mount('success', body, title, duration);
            },
            warning(body, title, duration) {
                this.mount('warning', body, title, duration);
            },
            info(body, title, duration) {
                this.mount('info', body, title, duration);
            },
            error(body, title, duration) {
                this.mount('danger', body, title, duration);
            },
            mount(type, body, title, duration) {
                if (duration) {
                    options.duration = duration;
                }
                (new Toastr({
                    propsData: {
                        duration: duration || options.duration, type, body, title,
                    },
                })).$mount();
            },
        };
    },
};
