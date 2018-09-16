<?php

use LaravelEnso\Core\app\Models\Owner;

return [
    'contactables' => [
        'owner' => Owner::class,
    ],
    'loggableMorph' => [
        'contactable' => [
            Owner::class => 'name',
        ],
    ],
];
