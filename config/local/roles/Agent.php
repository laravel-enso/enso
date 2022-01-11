<?php

return [
    'order' => 3,
    'role' => ['name' => 'Agent', 'display_name' => 'Agent Role'],
    'default_menu' => 'dashboard.index',
    'permissions' => [
        'core.home.index',
        'core.avatars.update',
        'core.avatars.show',
        'core.avatars.store',
        'core.preferences.store',
        'dashboard.index',
        'administration.users.show',
        'core.impersonate.stop',
        'core.notifications.index',
        'core.notifications.count',
        'core.notifications.read',
        'core.notifications.readAll',
        'core.notifications.destroy',
        'core.notifications.destroyAll',
        'system.localisation.options',
        'core.comments.users',
        'core.search.index',
    ]
];
