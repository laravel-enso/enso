<?php

use Illuminate\Database\Seeder;
use LaravelEnso\Core\App\Models\UserGroup;
use LaravelEnso\Roles\App\Models\Role;

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
