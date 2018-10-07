<?php

use Illuminate\Database\Seeder;
use LaravelEnso\Core\app\Models\User;
use LaravelEnso\People\app\Models\Person;
use LaravelEnso\Core\app\Models\UserGroup;
use LaravelEnso\RoleManager\app\Models\Role;

class UserSeeder extends Seeder
{
    public function run()
    {
        factory(User::class)->create([
            'person_id' => Person::whereName('Admin Root')->first()->id,
            'group_id' => UserGroup::whereName('Administrators')->first()->id,
            'email' => 'admin@laravel-enso.com',
            'password' => '$2y$10$06TrEefmqWBO7xghm2PUzeF/O0wcawFUv8TKYq.NF6Dsa0Pnmd/F2',
            'role_id' => Role::whereName('admin')->first()->id,
            'is_active' => true,
        ])->generateAvatar();
    }
}
