<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use LaravelEnso\PermissionManager\app\Models\Permission;

class CleanupPermissions extends Command
{
    protected $signature = 'cleanup:permissions';

    protected $description = 'This command will clean unused permissions';

    public function handle()
    {
        $permission = Permission::whereName('core.home')->first();

        if (!$permission) {
            $this->info('Permissions already cleaned');

            return;
        }

        $permission->roles()->detach();
        $permission->delete();

        $this->info('Permissions cleanup was successful');
    }
}
