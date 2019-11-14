<?php

return [
    'version' => '3.7.0',
    'showQuote' => true,
    'stateBuilder' => null,
    'defaultRole' => 'admin',
    'dateFormat' => 'd-m-Y',
    'dateTimeFormat' => 'd-m-Y H:i:s',
    'facebook' => 'https://facebook.com',
    'googleplus' => 'https://plus.google.com',
    'twitter' => 'https://twitter.com',
    'ravenKey' => env('RAVEN_DSN', null),
    'cacheLifetime' => env('CACHE_LIFETIME', 60),
    'ensoApiToken' => env('ENSO_API_TOKEN', null),
    'extendedDocumentTitle' => false,
];
