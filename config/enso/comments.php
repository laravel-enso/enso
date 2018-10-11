<?php

use LaravelEnso\Core\app\Models\UserGroup;

return [
    'editableTimeLimit' => 24 * 60 * 60,
    'onDelete' => 'cascade',
    'loggableMorph' => [
        'commentable' => [
            UserGroup::class => 'name',
        ],
    ],
];
