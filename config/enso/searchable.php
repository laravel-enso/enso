<?php

use LaravelEnso\Core\app\Models\Team;
use LaravelEnso\Core\app\Models\User;
use LaravelEnso\Core\app\Models\Owner;
use LaravelEnso\Contacts\app\Models\Contact;
use LaravelEnso\HowToVideos\app\Models\Video;

return [
    'models' => [
        User::class => [
            'groupLabel' => 'User',
            'attributes' => ['first_name', 'last_name', 'email'],
            'itemLabel' => 'fullName',
            'permissionGroup' => 'administration.users',
        ],
        Owner::class => [
            'groupLabel' => 'Owner',
            'attributes' => ['name', 'description'],
            'itemLabel' => 'name',
            'permissionGroup' => 'administration.owners',
        ],
        Team::class => [
            'groupLabel' => 'Team',
            'attributes' => ['name'],
            'itemLabel' => 'name',
            'permissionGroup' => 'administration.teams',
        ],
        Video::class => [
            'groupLabel' => 'HowToVideo',
            'attributes' => ['name', 'description'],
            'itemLabel' => 'name',
            'permissions' => ['index'],
            'permissionGroup' => 'howTo.videos',
        ],
        Contact::class => [
            'groupLabel' => 'Contact',
            'attributes' => ['first_name', 'last_name'],
            'itemLabel' => 'fullName',
            'permissions' => ['index'],
            'permissionGroup' => 'core.contacts',
        ],
    ],
    'limit' => 10,
];
