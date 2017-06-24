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
    buttons: [
        { extend: 'pageLength', className: "blahblah" },
        { extend: 'colvis', text: '<i class="fa fa-eye"></i>'},
        { extend: 'copy', text:'<i class="fa fa-clipboard"></i>'},
    ],
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