Vue.directive('select-on-focus', {
    inserted: function(el) {
        el.addEventListener('focus', function(el) {
            this.select();
        });
    }
});