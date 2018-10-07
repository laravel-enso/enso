<?php

use LaravelEnso\Core\app\Models\UserGroup;

return [
    'loggableMorph' => [
        'contactable' => [
            UserGroup::class => 'name',
        ],
    ],
];
