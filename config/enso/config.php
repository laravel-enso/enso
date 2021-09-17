<?php

return [
    'version' => '4.8.1',
    'ownerCompanyId' => (int) env('OWNER_COMPANY_ID', 1),
    'showQuote' => (bool) env('SHOW_QUOTE', true),
    'defaultRole' => 'admin',
    'dateFormat' => 'd-m-Y',
    'dateTimeFormat' => 'd-m-Y H:i:s',
    'facebook' => 'https://facebook.com',
    'instagram' => 'https://www.instagram.com',
    'twitter' => 'https://twitter.com',
    'extendedDocumentTitle' => (bool) env('EXTENDED_DOCUMENT_TITLE', false),
];
