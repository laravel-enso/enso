<?php

use Illuminate\Database\Seeder;
use LaravelEnso\Core\app\Models\Owner;
use LaravelEnso\RoleManager\app\Models\Role;

class UserSeeder extends Seeder
{
    public function run()
    {
        $id = \DB::table('users')->insert([
            'email' => 'admin@laravel-enso.com',
            'first_name' => 'Admin',
            'password' => '$2y$10$06TrEefmqWBO7xghm2PUzeF/O0wcawFUv8TKYq.NF6Dsa0Pnmd/F2',
            'role_id' => Role::whereName('admin')->first()->id,
            'owner_id' => Owner::whereName('Admin')->first()->id,
            'is_active' => true,
        ]);

        \Artisan::call('enso:avatars:generate');
    }
}
