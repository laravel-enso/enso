<?php

use Illuminate\Database\Seeder;
use LaravelEnso\Core\app\Models\Owner;
use LaravelEnso\RoleManager\app\Models\Role;

class OwnerSeeder extends Seeder
{
    public function run()
    {
        Owner::create([
            'name' => 'Admin',
            'is_active' => true,
        ])->roles()
        ->sync(Role::pluck('id'));
    }
}
