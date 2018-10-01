<?php

use LaravelEnso\Core\app\Models\Team;
use LaravelEnso\Core\app\Models\User;
use LaravelEnso\Core\app\Models\Owner;
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
        User::class => [
            'group' => 'User',
            'attributes' => ['first_name', 'last_name', 'email'],
            'label' => 'fullName',
            'permissionGroup' => 'administration.users',
        ],
        Owner::class => [
            'group' => 'Owner',
            'attributes' => ['name', 'description'],
            'label' => 'name',
            'permissionGroup' => 'administration.owners',
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
