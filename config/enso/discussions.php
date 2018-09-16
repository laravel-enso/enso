<?php

use App\Owner;

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
