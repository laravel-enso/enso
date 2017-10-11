Vue.filter('timeFromNow', value => {
    return moment(value).fromNow();
});