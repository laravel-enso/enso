module.exports = function() {
    return {
        'en': {
            noneSelectedText: 'Nothing selected',
            noneResultsText: 'No results match {0}',
            countSelectedText: function(numSelected, numTotal) {
                return (numSelected === 1) ? "{0} item selected from {1} total items" : "{0} items selected from {1} total items";
            },
            maxOptionsText: function(numAll, numGroup) {
                return [
                    (numAll === 1) ? 'Limit reached ({n} item max)' : 'Limit reached ({n} items max)', (numGroup === 1) ? 'Group limit reached ({n} item max)' : 'Group limit reached ({n} items max)'
                ];
            },
            selectAllText: 'Select All',
            deselectAllText: 'Deselect All',
            multipleSeparator: ', '
        },
        'ro': {
            noneSelectedText: 'Nu a fost selectat nimic',
            noneResultsText: 'Nu exista niciun rezultat {0}',
            countSelectedText: '{0} din {1} selectat(e)',
            maxOptionsText: ['Limita a fost atinsa ({n} {var} max)', 'Limita de grup a fost atinsa ({n} {var} max)', ['iteme', 'item']],
            multipleSeparator: ', ',
            selectAllText: 'Selecteaza tot',
            deselectAllText: 'Deselecteaza tot'
        }
    };
};