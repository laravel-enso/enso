<?php

use LaravelEnso\Companies\app\Models\Company;

return [
    'deletableTimeLimit' => 60 * 60,
    'linkExpiration' => 60 * 60 * 24,
    'imageWidth' => 2048,
    'imageHeight' => 2048,
    'onDelete' => 'restrict',
    'loggableMorph' => [
        'documentable' => [Company::class => 'name'],
    ],
];
