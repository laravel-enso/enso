<?php

return [

    'importTypeConfigs' => [
        [
            'type'                 => 0,
            'uiLabel'              => 'Example',
            'templateClass'        => 'App\\Importing\\Templates\\ExampleTemplate',
            'customValidatorClass' => 'App\\Importing\\Validators\\ExampleValidator', // optional
            'importerClass'        => 'App\\Importing\\Importers\\ExampleImporter',
            'sheetEntriesLimit'    => 5000, // optional, the default value is 5000
        ],
    ],
];
