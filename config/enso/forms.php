<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Validations
    |--------------------------------------------------------------------------
    | This flag sets whether validations are executed in production or local only.
    | Values: 'always/local'
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
            'icon' => 'fas fa-plus',
            'class' => 'is-info',
            'event' => 'create',
            'action' => 'router',
            'label' => 'Create',
        ],
        'store' => [
            'icon' => 'fas fa-check',
            'class' => 'is-success',
            'event' => 'store',
            'action' => 'router',
            'label' => 'Save',
        ],
        'update' => [
            'icon' => 'fas fa-check',
            'class' => 'is-success',
            'event' => 'update',
            'action' => 'router',
            'label' => 'Update',
        ],
        'destroy' => [
            'icon' => 'fas fa-trash-alt',
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
    | Enso Authorization
    |--------------------------------------------------------------------------
    |
    | Integrate with Enso's route / permissions
    |
    */

    'authorize' => true,
];
