<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use LaravelEnso\PermissionManager\app\Models\Permission;

class RouteCleanup extends Command
{
    protected $signature = 'enso:route-cleanup';

    protected $description = 'Updates some of the select routes for the new select builder. Removes core.contacts.list';

    protected $permissions = [
        'system.roles.getOptionList',
        'administration.owners.getOptionList',
        'administration.users.getOptionList',
    ];

    public function handle()
    {
        Permission::whereIn('name', $this->permissions)->each(function ($permission) {
            $permission->update([
                'name' => str_replace('getOptionList', 'selectOptions', $permission->name),
            ]);
        });

        $permission = Permission::whereName('core.contacts.list')->first();

        if (!$permission) {
            return;
        }

        $permission->roles()->sync([]);
        $permission->delete();
    }
}
