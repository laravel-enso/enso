<?php

use App\Classes\LocalState;

return [
    'version' => '2.15.2',
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
    'password' => [
        'lifetime' => env('PASSWORD_LIFETIME', 0),
        'minLength' => env('PASSWORD_LENGTH', 6),
        'minUpperCase' => env('PASSWORD_UPPER_CASE_CHARACTERS', 0),
        'minNumeric' => env('PASSWORD_NUMERIC_CHARACTERS', 0),
        'minSpecial' => env('PASSWORD_SPECIAL_CHARACTERS', 0)
    ],
    'cacheLifetime' => env('CACHE_LIFETIME', 60),
    'ensoApiToken' => env('ENSO_API_TOKEN', null),
    'extendedDocumentTitle' => false,
];
