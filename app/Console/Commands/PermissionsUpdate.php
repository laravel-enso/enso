<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use LaravelEnso\PermissionManager\app\Models\Permission;

class PermissionsUpdate extends Command
{
    protected $signature = 'enso:permissions:update';

    protected $description = 'This command will update permissions';

    public function handle()
    {
        $this->removeCoreHome();
        $this->updateDocumentsStore();
    }

    private function removeCoreHome()
    {
        $permission = Permission::whereName('core.home')
            ->first();

        if (!$permission) {
            $this->info('Permission "core.home" already cleaned');

            return;
        }

        $permission->roles()->detach();
        $permission->delete();

        $this->info('Permission "core.home" was successfully removed');
    }

    private function updateDocumentsStore()
    {
        $permission = Permission::whereName('core.documents.upload')
            ->first();

        if (!$permission) {
            $this->info('Permission "core.documents.upload" was already updated');

            return;
        }

        $permission->update(['name' => 'core.documents.store']);

        $this->info('Permission "core.documents.store" was successfuly updated');
    }
}
