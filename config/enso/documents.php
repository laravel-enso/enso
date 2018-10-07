<?php

use LaravelEnso\Core\app\Models\UserGroup;

return [
    'deletableTimeLimit' => 60 * 60,
    'linkExpiration' => 60 * 60 * 24,
    'imageWidth' => 2048,
    'imageHeight' => 2048,
    'loggableMorph' => [
        'documentable' => [
            UserGroup::class => 'name',
        ],
    ],
];
