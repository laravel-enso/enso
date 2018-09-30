<?php

use App\Classes\LocalState;
use LaravelEnso\Core\app\Models\Owner;

return [
    'version' => '2.11.10',
    'showQuote' => true,
    'facebook' => 'https://facebook.com',
    'googleplus' => 'https://plus.google.com',
    'twitter' => 'https://twitter.com',
    'stateBuilder' => LocalState::class,
    'ownerModel' => Owner::class,
    'defaultRole' => 'admin',
    'phpDateFormat' => 'd-m-Y',
    'jsDateFormat' => 'DD-MM-YYYY',
    'paths' => [
        'files' => 'files',
        'avatars' => 'avatars',
        'imports' => 'imports',
        'exports' => 'exports',
        'howToVideos' => 'howToVideos',
    ],
    'ravenKey' => env('RAVEN_DSN', null),
    'cacheLifetime' => env('CACHE_LIFETIME', 60),
    'ensoApiToken' => env('ENSO_API_TOKEN', null),
    'extendedDocumentTitle' => false,
];
