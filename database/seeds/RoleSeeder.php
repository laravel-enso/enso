<?php

use Illuminate\Database\Seeder;
use LaravelEnso\MenuManager\app\Models\Menu;
use LaravelEnso\RoleManager\app\Models\Role;
use LaravelEnso\PermissionManager\app\Models\Permission;

class RoleSeeder extends Seeder
{
    private const Roles = [
        ['menu_id' => 1, 'name' => 'admin', 'display_name' => 'Administrator', 'description' => 'Administrator role. Full featured.'],
        ['menu_id' => 1, 'name' => 'supervisor', 'display_name' => 'Supervisor', 'description' => 'Supervisor role.'],
    ];

    public function run()
    {
        $roles = collect(self::Roles)->map(function ($role) {
            return factory(Role::class)->create($role);
        });

        $admin = $roles->first();

        $admin->permissions()
                ->sync(Permission::pluck('id'));

        $admin->menus()
            ->sync(Menu::pluck('id'));

        $supervisor = $roles->last();

        $supervisor->permissions()
                ->sync(Permission::implicit()->pluck('id'));

        $supervisor->menus()
            ->sync(Menu::pluck('id'));
    }
}
