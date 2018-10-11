<?php

use LaravelEnso\Core\app\Models\UserGroup;

return [
    'onDelete' => 'cascade',
    'loggableMorph' => [
        'contactable' => [
            UserGroup::class => 'name',
        ],
    ],
];
