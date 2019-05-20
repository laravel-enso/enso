<?php

return [
    'linkExpiration' => 60 * 60 * 24,
    'storageLimit' => 500000,
    'paginate' => env('FILES_PAGINATE', 24),
    'paths' => [
        'files' => 'files',
        'tenants' => 'tenants',
        'testing' => 'testing',
    ],
];
