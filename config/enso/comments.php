<?php

use App\Owner;

return [
    'editableTimeLimit' => 24 * 60 * 60,
    'commentables' => [
        'owner' => Owner::class,
    ],
    'loggableMorph' => [
        'commentable' => [
            Owner::class => 'name'
        ]
    ]
];
