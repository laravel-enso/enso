<?php

use Illuminate\Database\Seeder;
use LaravelEnso\Roles\app\Models\Role;
use LaravelEnso\Core\app\Models\UserGroup;

class UserGroupSeeder extends Seeder
{
    public function run()
    {
        factory(UserGroup::class)->create([
            'name' => 'Administrators',
            'description' => 'Administrator users group',
        ])->roles()
        ->sync(Role::pluck('id'));
    }
}
