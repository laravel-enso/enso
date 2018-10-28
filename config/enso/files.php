<?php

use LaravelEnso\FileManager\app\Models\Upload;
use LaravelEnso\DataExport\app\Models\DataExport;
use LaravelEnso\DocumentsManager\app\Models\Document;

return [
    'visible' => [
        'exports' => DataExport::class,
        'documents' => Document::class,
        'uploads' => Upload::class,
    ],
    'storageLimit' => '500000'
];
