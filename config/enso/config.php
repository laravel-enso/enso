<?php

return [
    'version' => '2.7.8',
    'facebook' => '',
    'googleplus' => '',
    'twitter' => 'https://twitter.com',
    'stateBuilder' => 'App\Classes\LocalState',
    'ownerModel' => 'App\Owner',
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
    'extendedDocumentTitle' => false,
];
