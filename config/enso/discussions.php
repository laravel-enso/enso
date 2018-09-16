<?php

use LaravelEnso\Core\app\Models\Owner;

return [
    'discussables' => [
        'owner' => Owner::class,
    ],
    'loggableMorph' => [
        'discussable' => [
            Owner::class => 'name',
        ],
    ],
];
