<?php

use Illuminate\Database\Seeder;
use LaravelEnso\Core\Models\UserGroup;
use LaravelEnso\Roles\Models\Role;

class UserGroupSeeder extends Seeder
{
    public function run()
    {
        factory(UserGroup::class)->create([
            'name' => 'Administrators',
            'description' => 'Administrator users group',
        ])->roles()->sync(Role::pluck('id'));
    }
}
