<?php

return [
    'version' => '4.4.0',
    'ownerCompanyId' => (int) env('OWNER_COMPANY_ID', 1),
    'showQuote' => (bool) env('SHOW_QUOTE', true),
    'defaultRole' => 'admin',
    'dateFormat' => 'd-m-Y',
    'dateTimeFormat' => 'd-m-Y H:i:s',
    'facebook' => 'https://facebook.com',
    'googleplus' => 'https://plus.google.com',
    'twitter' => 'https://twitter.com',
    'ravenKey' => env('RAVEN_DSN', null),
    'cacheLifetime' => (int) env('CACHE_LIFETIME', 60),
    'ensoApiToken' => env('ENSO_API_TOKEN', null),
    'extendedDocumentTitle' => (bool) env('EXTENDED_DOCUMENT_TITLE', false),
];
