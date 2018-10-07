<?php

use LaravelEnso\Teams\app\Models\Team;
use LaravelEnso\People\app\Models\Person;
use LaravelEnso\Contacts\app\Models\Contact;
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
            'attributes' => ['first_name', 'last_name'],
            'label' => 'fullName',
            'permissions' => ['index'],
            'permissionGroup' => 'core.contacts',
        ],
    ],
];
