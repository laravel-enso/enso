$.extend(true, $.fn.dataTable.defaults, {
    dom: 'Brftip',
    stateSave: Store.user.preferences.global.dtStateSave,
    lengthMenu: [10, 15, 20, 25, 30],
    autoWidth: true,
    pagingType: "full_numbers",
    filter: true,
    stateDuration: 60 * 60 * 24 * 90,
    order: [],
    colReorder: true,
    responsive: true,
    serverSide: true,
});

$.fn.dataTable.Api.register('sum()', function() {
    return this.flatten().reduce(function(a, b) {
        if (typeof a === 'string') {
            a = a.replace(/[^\d.-]/g, '') * 1;
        }

        if (typeof b === 'string') {
            b = b.replace(/[^\d.-]/g, '') * 1;
        }

        return a + b;
    }, 0);
});