<?php

use LaravelEnso\Core\app\Models\UserGroup;

return [
    'streetTypes' => [
        'Street' => 'Street',
        'Avenue' => 'Avenue',
        'Boulevard' => 'Boulevard',
        'Parade' => 'Parade',
        'Road' => 'Road',
        'Lane' => 'Lane',
        'Route' => 'Route',
        'Row' => 'Row',
        'Vista' => 'Vista',
        'Bend' => 'Bend',
        'Square' => 'Square',
    ],
    'buildingTypes' => [
        'Offices' => 'Offices',
        'Residential' => 'Residential',
        'Comercial' => 'Comercial',
        'Industrial' => 'Industrial',
    ],
    'validations' => [
        'street' => 'required',
        'city' => 'required',
        'country_id' => 'required',
    ],
    'resource' => [
        'administrativeArea' => 'administrative_area',
        'city' => 'city',
        'subAdministrativeArea' => 'sub_administrative_area',
        'streetType' => 'street_type',
        'street' => 'street',
        'number' => 'number',
        'building' => 'building',
        'entry' => 'entry',
        'floor' => 'floor',
        'apartment' => 'apartment',
        'buildingType' => 'building_type',
        'postalArea' => 'postal_area',
        'obs' => 'obs',
        'isDefault' => 'is_default',
    ],
    'loggableMorph' => [
        'addressable' => [
            UserGroup::class => 'name',
        ],
    ],
];
