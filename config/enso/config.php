<?php

use App\Classes\LocalState;

return [
    'version' => '3.0.0',
    'showQuote' => true,
    'stateBuilder' => LocalState::class,
    'defaultRole' => 'admin',
    'phpDateFormat' => 'd-m-Y',
    'jsDateFormat' => 'dd-MM-yyyy',
    'paths' => [
        'files' => 'files',
        'avatars' => 'avatars',
        'imports' => 'imports',
        'exports' => 'exports',
        'howToVideos' => 'howToVideos',
    ],
    'facebook' => 'https://facebook.com',
    'googleplus' => 'https://plus.google.com',
    'twitter' => 'https://twitter.com',
    'ravenKey' => env('RAVEN_DSN', null),
    'cacheLifetime' => env('CACHE_LIFETIME', 60),
    'ensoApiToken' => env('ENSO_API_TOKEN', null),
    'extendedDocumentTitle' => false,
];
