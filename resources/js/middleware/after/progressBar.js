import router from '../../router';

export default () => {
    if (router.app.$refs.progressBar) {
        router.app.$refs.progressBar.stopRouting();
    }
};
