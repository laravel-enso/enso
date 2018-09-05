const HowToVideosIndex = () => import('../pages/howtovideos/Index.vue');

export default {
    name: 'howTo.videos.index',
    path: '/howTo/videos',
    component: HowToVideosIndex,
    meta: {
        breadcrumb: 'how to videos',
        title: 'How To Videos',
    },
};
