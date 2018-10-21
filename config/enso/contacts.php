<?php

use LaravelEnso\Companies\app\Models\Company;

return [
    'onDelete' => 'cascade',
    'loggableMorph' => [
        'contactable' => [
            Company::class => 'name',
        ],
    ],
];
