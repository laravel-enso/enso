module.exports = function(identifier = 'select.select', width = '100%', liveSearch = true, placeholder = null) {
    let options = {
        width: width,
        liveSearch: liveSearch,
        size: 5,
        actionsBox: true
    };

    if (placeholder) {
        $.extend(true, options, {
            title: placeholder
        });
    }

    $(identifier).selectpicker(options);
};