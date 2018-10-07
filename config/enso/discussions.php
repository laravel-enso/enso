<?php

use LaravelEnso\Core\app\Models\UserGroup;

return [
    'loggableMorph' => [
        'discussable' => [
            UserGroup::class => 'name',
        ],
    ],
];
