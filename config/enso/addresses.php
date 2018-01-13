<?php

return [
    'addressables' => [
        'owner' => App\Owner::class,
    ],
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
    'validations' => [
        'street' => 'required',
        'city' => 'required',
        'country_id' => 'required',
    ],
];
