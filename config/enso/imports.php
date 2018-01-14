<?php

return [
    'owners' => [
        'label' => 'Owners',
        'template' => 'app/Importing/Templates/owners.json',
        'importerClass' => 'App\\Importing\\Importers\\OwnerImporter',
        'sheetEntriesLimit' => 5000, // optional, the default value is 5000
        'stopOnErrors' => false, // optional, the default value is false
    ],
];
