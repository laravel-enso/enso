<?php

return [
    'onDelete' => 'cascade',
    'defaultCountryId' => 184,
    'googleMaps' => [
        'key' => env('GOOGLE_MAPS_KEY'),
        'url' => 'https://maps.googleapis.com/maps/api/geocode/json',
    ],
];
