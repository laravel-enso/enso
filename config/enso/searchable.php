<?php

use LaravelEnso\Teams\app\Models\Team;
use LaravelEnso\People\app\Models\Person;
use LaravelEnso\Companies\app\Models\Company;
use LaravelEnso\Companies\app\Models\Contact;
use LaravelEnso\HowToVideos\app\Models\Video;

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
        Video::class => [
            'group' => 'HowToVideo',
            'attributes' => ['name', 'description'],
            'label' => 'name',
            'permissions' => ['index'],
            'permissionGroup' => 'howTo.videos',
        ],
        Contact::class => [
            'group' => 'Contact',
            'attributes' => ['person.name', 'person.appellative', 'position'],
            'label' => 'person.name',
            'permissions' => ['edit'],
            'permissionGroup' => 'administration.companies',
            'routeParam' => ['company' => 'company_id'],
        ],
    ],
];
