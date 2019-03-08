<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Validations
    |--------------------------------------------------------------------------
    | This flag sets whether validations are executed in production or local only.
    | Values: 'always/local/yourEnv...'
    |
    */

    'validations' => 'local',

    /*
    |--------------------------------------------------------------------------
    | Buttons
    |--------------------------------------------------------------------------
    |
    | Here is a list of the default buttons that can be customized as desired
    |
     */

    'buttons' => [
        'create' => [
            'icon' => 'plus',
            'class' => 'is-info',
            'event' => 'create',
            'action' => 'router',
            'label' => 'Create',
        ],
        'show' => [
            'icon' => 'eye',
            'class' => 'is-success',
            'event' => 'show',
            'action' => 'router',
            'label' => 'Show',
        ],
        'back' => [
            'icon' => 'arrow-left',
            'class' => 'is-primary',
            'event' => 'back',
            'action' => 'router',
            'label' => 'Back',
        ],
        'store' => [
            'icon' => 'check',
            'class' => 'is-success',
            'event' => 'store',
            'action' => 'router',
            'label' => 'Save',
        ],
        'update' => [
            'icon' => 'check',
            'class' => 'is-success',
            'event' => 'update',
            'action' => 'router',
            'label' => 'Update',
        ],
        'destroy' => [
            'icon' => 'trash-alt',
            'class' => 'is-danger',
            'event' => 'destroy',
            'action' => 'ajax',
            'method' => 'DELETE',
            'message' => 'The selected record is about to be deleted. Are you sure?',
            'confirmation' => true,
            'label' => 'Delete',
        ],
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
    | Select Placeholder
    |--------------------------------------------------------------------------
    | Default select placeholder. Can be overriden by setting a custom one
    | in the json template.
    |
    */

    'selectPlaceholder' => 'Choose',

    /*
    |--------------------------------------------------------------------------
    | Enso Authorization
    |--------------------------------------------------------------------------
    |
    | Integrate with Enso's route / permissions
    |
    */

    'authorize' => true,

    /*
    |--------------------------------------------------------------------------
    | Divider title placement
    |--------------------------------------------------------------------------
    | When using multiple sections you have the option to have a divider
    | and a title. This option specifies the position of the title.
    | Available options: 'left', 'center', 'right'.
    */

    'dividerTitlePlacement' => 'center',
];
