<?php

use LaravelEnso\Core\app\Models\UserGroup;

return [
    'onDelete' => 'cascade',
    'loggableMorph' => [
        'discussable' => [
            UserGroup::class => 'name',
        ],
    ],
];
