<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Validations
    |--------------------------------------------------------------------------
    | This flag sets whether validations are also executed in production
    | or only in local/development.
    | Values: 'always/local'
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
                'icon' => 'fa fa-plus',
                'class' => 'is-info',
                'routeSuffix' => 'create',
                'event' => 'create',
                'action' => 'router',
                'label' => 'Create',
            ],
            'excel' => [
                'icon' => 'fa fa-file-excel-o',
                'class' => null,
                'routeSuffix' => 'exportExcel',
                'event' => 'export-excel',
                'action' => 'export',
                'label' => 'Excel',
            ],
        ],
        'row' => [
            'show' => [
                'icon' => 'fa fa-eye',
                'class' => 'is-success',
                'routeSuffix' => 'show',
                'event' => 'show',
                'action' => 'router',
            ],
            'edit' => [
                'icon' => 'fa fa-pencil',
                'class' => 'is-warning',
                'routeSuffix' => 'edit',
                'event' => 'edit',
                'action' => 'router',
            ],
            'destroy' => [
                'icon' => 'fa fa-trash',
                'class' => 'is-danger',
                'routeSuffix' => 'destroy',
                'event' => 'destroy',
                'action' => 'ajax',
                'method' => 'DELETE',
                'message' => 'The selected record is about to be deleted. Are you sure?',
                'confirmation' => true,
            ],
            'download' => [
                'icon' => 'fa fa-cloud-download',
                'class' => 'is-primary',
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
        'default' => [
            'striped', 'hover', 'bordered', 'center',
        ],
        'mapping' => [
            'left' => 'has-text-left',
            'center' => 'has-text-centered',
            'right' => 'has-text-right',
            'compact' => 'is-narrow',
            'striped' => 'is-striped',
            'bordered' => 'is-bordered',
            'hover' => 'is-hoverable',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Boolean
    |--------------------------------------------------------------------------
    |
    | HTML render code for the boolean type of columns
    |
    */

    'boolean' => [
        false => '<span class="tag is-table-tag is-danger"><span class="icon is-small"><i class="fa fa-times"></i></span></span>',
        true => '<span class="tag is-table-tag is-success"><span class="icon is-small"><i class="fa fa-check"></i></span></span>',
    ],

    /*
    |--------------------------------------------------------------------------
    | Export Settings
    |--------------------------------------------------------------------------
    | Path where the temporary files are stored within storage/app folder; row
    | limit for exports; php max_execution_time; Note: email notification
    |  will be used in all cases for sending the export.
    */

    'export' => [
        'path' => 'exports',
        'limit' => 20000,
        'maxExecutionTime' => 100,
        'notifications' => ['broadcast', 'database'],
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
];
