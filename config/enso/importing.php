<?php

return [
    'validationLabels' => [
        'structure_issues' => 'Structure Issues',
        'extra_sheets' => 'Extra Sheets',
        'missing_sheets' => 'Missing Sheets',
        'extra_columns' => 'Extra Columns',
        'missing_columns' => 'Missing Columns',
        'exists_in_sheet' => 'Value must exist in the sheet',
        'unique_in_column' => 'Value must be unique in its column',
        'duplicate_lines' => 'This sheet lines are doubles',
        'sheet_entries_limit_exceeded' => 'Exceeded the entries limit of',
        'missing_param_from_config' => 'The following parameter is missing from the config file',
    ],
    'configs' => [
        'owners' => [
            'label' => 'Owners',
            'template' => 'app/Importing/Templates/owners.json',
            'importerClass' => 'App\\Importing\\Importers\\OwnerImporter',
            'sheetEntriesLimit' => 5000, // optional, the default value is 5000
            'stopOnErrors' => false, // optional, the default value is false
        ],
    ],
];
