import Notification from './Notification.vue';

export default {
    install(Vue, options) {
        const Toastr = Vue.extend(Notification);

        Vue.prototype.$toastr = {
            error(body, title, duration) {
                this.toastr('danger', body, title, duration);
            },
            info(body, title, duration) {
                this.toastr('info', body, title, duration);
            },
            message(body, title, duration) {
                this.toastr('message', body, title, duration);
            },
            primary(body, title, duration) {
                this.toastr('primary', body, title, duration);
            },
            success(body, title, duration) {
                this.toastr('success', body, title, duration);
            },
            warning(body, title, duration) {
                this.toastr('warning', body, title, duration);
            },

            toastr(type, body, title, duration) {
                if (duration) {
                    options.duration = duration;
                }

                (new Toastr({
                    propsData: {
                        ...options, type, body, title,
                    },
                })).$mount();
            },
        };
    },
};
