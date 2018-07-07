<?php

use Illuminate\Database\Seeder;
use LaravelEnso\MenuManager\app\Models\Menu;
use LaravelEnso\RoleManager\app\Models\Role;
use LaravelEnso\PermissionManager\app\Models\Permission;

class RoleSeeder extends Seeder
{
    public function run()
    {
        collect(\File::files(config_path('local/roles')))
            ->map(function ($file) {
                $config = str_replace('.php', '', $file->getFilename());

                return config('local.roles.'.$config);
            })->sortBy('order')
            ->each(function ($config) {
                $this->create($config);
            });
    }

    private function create(array $config)
    {
        $role = Role::firstOrCreate(
            ['name' => $config['role']['name']],
            [
                'display_name' => $config['role']['display_name'],
                'menu_id' => $this->menuId($config)
            ]
        );

        $role->permissions()
            ->sync($this->permissionIds($config));

        $role->menus()
            ->sync($this->menuIds($config));
    }

    private function menuId($config)
    {
        return optional(Menu::whereLink($config['default_menu'])->first())
            ->id;
    }

    private function permissionIds($config)
    {
        return Permission::whereIn('name', $config['permissions'])
                ->pluck('id');
    }

    private function menuIds($config)
    {
        return Menu::whereIn('name', $config['menus'])
                ->pluck('id');
    }
}
