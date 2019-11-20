<?php

return [
    'version' => '3.7.1',
    'ownerCompanyId' => env('OWNER_COMPANY_ID', 1),
    'showQuote' => env('SHOW_QUOTE', true),
    'defaultRole' => 'admin',
    'dateFormat' => 'd-m-Y',
    'dateTimeFormat' => 'd-m-Y H:i:s',
    'facebook' => 'https://facebook.com',
    'googleplus' => 'https://plus.google.com',
    'twitter' => 'https://twitter.com',
    'ravenKey' => env('RAVEN_DSN', null),
    'cacheLifetime' => env('CACHE_LIFETIME', 60),
    'ensoApiToken' => env('ENSO_API_TOKEN', null),
    'extendedDocumentTitle' => env('EXTENDED_DOCUMENT_TITLE', false),
];
