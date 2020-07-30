<?php

return [
    'order' => 3,
    'role' => ['name' => 'Agent', 'display_name' => 'Agent Role'],
    'default_menu' => 'dashboard.index',
    'permissions' => [
        'administration.users.show',
        'core.avatars.show',
        'core.avatars.store',
        'core.avatars.update',
        'core.comments.users',
        'core.home.index',
        'core.impersonate.stop',
        'core.notifications.count',
        'core.notifications.destroy',
        'core.notifications.destroyAll',
        'core.notifications.index',
        'core.notifications.read',
        'core.notifications.readAll',
        'core.preferences.resetToDefault',
        'core.preferences.store',
        'core.search.index',
        'dashboard.index',
        'system.localisation.options',
    ],
];
