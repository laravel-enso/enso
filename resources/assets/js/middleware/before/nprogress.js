import router from '../../router';

export default () => {
    if (router.app.$nprogress) {
        router.app.$nprogress.startRouting();
    }
};

