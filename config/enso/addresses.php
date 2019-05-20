<?php

return [
    'onDelete' => 'cascade',
    'formTemplate' => null,
    'loggableMorph' => [
        'addressable' => [],
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
    'buildingTypes' => [
        'Offices' => 'Offices',
        'Residential' => 'Residential',
        'Commercial' => 'Commercial',
        'Industrial' => 'Industrial',
    ],
    'label' => [
        'separator' => ' - ',
        'attributes' => [
            'localityName', 'street', 'number',
        ],
    ],
];
