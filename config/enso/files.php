<?php

return [
    'linkExpiration' => 60 * 60 * 24,
    'storageLimit' => 500000,
    'paginate' => (int) env('FILES_PAGINATE', 24),
    'testingFolder' => 'testing',
];
