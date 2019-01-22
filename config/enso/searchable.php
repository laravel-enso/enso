<?php

use LaravelEnso\Teams\app\Models\Team;
use LaravelEnso\People\app\Models\Person;
use LaravelEnso\Companies\app\Models\Company;

return [
    'defaultLabel' => 'name',
    'routes' => [
        'show' => 'eye',
        'edit' => 'pencil-alt',
        'index' => 'list-ul',
    ],
    'limit' => 10,
    'models' => [
        Person::class => [
            'group' => 'Person',
            'attributes' => ['name', 'appellative', 'email', 'phone'],
            'label' => 'name',
            'permissionGroup' => 'administration.people',
        ],
        Company::class => [
            'group' => 'Company',
            'attributes' => ['name'],
            'label' => 'name',
            'permissionGroup' => 'administration.companies',
        ],
        Team::class => [
            'group' => 'Team',
            'attributes' => ['name'],
            'label' => 'name',
            'permissionGroup' => 'administration.teams',
        ],
    ],
];
