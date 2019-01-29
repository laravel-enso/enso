<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Validations
    |--------------------------------------------------------------------------
    | This flag sets whether validations are also executed in production
    | or only in local/development.
    | Values: 'always/local/yourEnv...'
    |
    */

    'validations' => 'local',

    /*
    |--------------------------------------------------------------------------
    | Labels used when the drawing a table
    |--------------------------------------------------------------------------
    |
    | The labels are translated if a localisation function is available
    |
     */

    'labels' => [
        'crtNo' => '#',
        'actions' => 'Actions',
    ],

    /*
    |--------------------------------------------------------------------------
    | Length menu
    |--------------------------------------------------------------------------
    |
    | These are the predefined settings for the pagination options. If another
    | set of pagination options is given in a table template, the global
    | configuration is disregarded for that table.
    |
    */

    'lengthMenu' => [
        10, 15, 20, 25, 30,
    ],

    /*
    |--------------------------------------------------------------------------
    | Default Action Buttons
    |--------------------------------------------------------------------------
    | Here is a list of the default action buttons. You can edit any of the
    | defaults, or add/remove. Global buttons will be displayed above the
    | table while row buttons on each row. Row buttons will depend on
    | the dtRowId.
     */

    'buttons' => [
        'global' => [
            'create' => [
                'icon' => 'plus',
                'class' => null,
                'routeSuffix' => 'create',
                'event' => 'create',
                'action' => 'router',
                'label' => 'Create',
            ],
            'excel' => [
                'icon' => 'file-excel',
                'class' => null,
                'routeSuffix' => 'exportExcel',
                'event' => 'export-excel',
                'action' => 'export',
                'label' => 'Excel',
            ],
            'action' => [
                'icon' => 'check',
                'class' => null,
                'routeSuffix' => 'action',
                'event' => 'custom-action',
                'postEvent' => 'custom-action-done',
                'action' => 'ajax',
                'method' => 'PATCH',
                'label' => 'Action',
                'message' => 'Custom Action. Are you sure?',
                'confirmation' => true,
            ],
        ],
        'row' => [
            'show' => [
                'icon' => 'eye',
                'class' => 'is-row-button',
                'routeSuffix' => 'show',
                'event' => 'show',
                'action' => 'router',
            ],
            'edit' => [
                'icon' => 'pencil-alt',
                'class' => 'is-row-button',
                'routeSuffix' => 'edit',
                'event' => 'edit',
                'action' => 'router',
            ],
            'destroy' => [
                'icon' => 'trash-alt',
                'class' => 'is-row-button',
                'routeSuffix' => 'destroy',
                'event' => 'destroy',
                'action' => 'ajax',
                'method' => 'DELETE',
                'message' => 'The selected record is about to be deleted. Are you sure?',
                'confirmation' => true,
                'postEvent' => 'destroyed',
            ],
            'download' => [
                'icon' => 'cloud-download-alt',
                'class' => 'is-row-button',
                'routeSuffix' => 'download',
                'event' => 'download',
                'action' => 'href',
            ],
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Style
    |--------------------------------------------------------------------------
    | Style defaults and mapping for your front-end framework. Note: You should
    | set only one align attribute in default list.
    |
    */

    'style' => [
        'default' => ['hover', 'center'],
        'mapping' => [
            'left' => 'has-text-left',
            'center' => 'has-text-centered',
            'right' => 'has-text-right',
            'compact' => 'is-narrow',
            'striped' => 'is-striped',
            'bordered' => 'is-bordered',
            'hover' => 'is-hoverable',
        ],
        'highlight' => 'has-background-info',
    ],

    /*
    |--------------------------------------------------------------------------
    | Export Settings
    |--------------------------------------------------------------------------
    | Path where the temporary files are stored within storage/app folder; row
    | limit for exports; php max_execution_time; Note: email notification
    | will be used in non Enso environments.
    */

    'export' => [
        'path' => 'exports',
        'timeout' => 60 * 10,
        'notifications' => ['broadcast', 'database'],
        'chunk' => 2000,
    ],

    /*
    |--------------------------------------------------------------------------
    | Queues
    |--------------------------------------------------------------------------
    | Specifies the queue for exports generation and for notifications.
    |
    */

    'queues' => [
        'exports' => 'heavy',
        'notifications' => 'notifications',
    ],

    /*
    |--------------------------------------------------------------------------
    | Date format
    |--------------------------------------------------------------------------
    | Global date format for date columns. Will use Carbon to parse the columns
    | marked as date to the desired format.
    |
    */

    'dateFormat' => 'd-m-Y',

    /*
    |--------------------------------------------------------------------------
    | Detailed information record limit
    |--------------------------------------------------------------------------
    | Sometimes the table handles hundreds of millions of records. By setting
    | an upper limit for detailed information the permformance can be
    | greatly improved. The info can still be called on demand.
    */

    'fullInfoRecordLimit' => 1000000,

    /*
    |--------------------------------------------------------------------------
    | Debounce Rate
    |--------------------------------------------------------------------------
    |
    | Configure the debounce for the serverside requests. Use a higher value for
    | a bigger table.
    */

    'debounce' => 100,

    /*
    |--------------------------------------------------------------------------
    | Method
    |--------------------------------------------------------------------------
    |
    | If you're working with larger tables sometimes the URI can get too long
    | and you may run in a 414 Exception. This flag allows to globally
    | configure the request method for fetching data.
    */

    'method' => 'GET',

    /*
    |--------------------------------------------------------------------------
    | Route suffixes
    |--------------------------------------------------------------------------
    |
    | The route suffix will be the default used for every table. You will still
    | have the option of customizing the suffix for certain tables by using
    | the same attribute in the table's json template.
    */

    'dataRouteSuffix' => 'tableData',

    /*
    |--------------------------------------------------------------------------
    | SQL comparison operator
    |--------------------------------------------------------------------------
    |
    | The comparison operator will be the default used for every table. You
    | will still have the option of customizing the operator for certain
    | tables by using the same attribute in the table's json template.
    | Possible values for comparison operator: LIKE, ILIKE
    */

    'comparisonOperator' => 'LIKE',
];
