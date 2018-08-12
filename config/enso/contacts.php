<?php

use App\Owner;

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
