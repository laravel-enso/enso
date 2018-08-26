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
        \DB::table('roles')->insert(self::Roles);

        $role = Role::whereName('admin')->first();

        $role->permissions()
                ->attach(Permission::all());

        $role->menus()
            ->attach(Menu::all());

        $role = Role::whereName('supervisor')->first();

        $role->permissions()
                ->attach(Permission::implicit()->get());

        $role->menus()
            ->attach(Menu::all());
    }
}
