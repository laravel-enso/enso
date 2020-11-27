<?php

return [
    'deletableTimeLimit' => 60 * 60,
    'linkExpiration' => 60 * 60 * 24,
    'imageWidth' => 2048,
    'imageHeight' => 2048,
    'onDelete' => 'restrict',
    'loggableMorph' => [
        'documentable' => [],
    ],
    'queues' => [
        'ocr' => 'heavy',
    ],
];
