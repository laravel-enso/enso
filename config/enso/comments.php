<?php

use LaravelEnso\Companies\app\Models\Company;

return [
    'editableTimeLimit' => 24 * 60 * 60,
    'onDelete' => 'cascade',
    'humanReadableDates' => true,
    'loggableMorph' => [
        'commentable' => [
            Company::class => 'name',
        ],
    ],
];
