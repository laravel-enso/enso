<?php

return [
    'version' => '2.0.28',
    'defaultRole' => 'admin',
    'defaultRole' => 'admin',
    'phpDateFormat' => 'd-m-Y',
    'jsDateFormat' => 'DD-MM-YYYY',
    'paths' => [
        'files' => 'files',
        'avatars' => 'avatars',
        'imports' => 'imports',
        'temp' => 'temp',
        'exports' => 'exports',
    ],
    'ravenKey' => env('RAVEN_DSN', null),
    'cacheLifetime' => env('CACHE_LIFETIME', 60),
];
