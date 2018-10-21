<?php

use LaravelEnso\Companies\app\Models\Company;

return [
    'onDelete' => 'cascade',
    'loggableMorph' => [
        'discussable' => [
            Company::class => 'name',
        ],
    ],
];
