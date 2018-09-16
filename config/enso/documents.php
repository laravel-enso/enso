<?php

use LaravelEnso\Core\app\Models\Owner;

return [
    'deletableTimeLimit' => 60 * 60,
    'linkExpiration' => 60 * 60 * 24,
    'imageWidth' => 2048,
    'imageHeight' => 2048,
    'documentables' => [
        'owner' => Owner::class,
    ],
    'loggableMorph' => [
        'documentable' => [
            Owner::class => 'name',
        ],
    ],
];
