<?php

use Illuminate\Database\Seeder;
use LaravelEnso\Core\app\Models\Owner;
use LaravelEnso\RoleManager\app\Models\Role;

class OwnerSeeder extends Seeder
{
    public function run()
    {
        \DB::table('owners')->insert([
            'name' => 'Admin',
            'is_active' => true,
        ]);

        Owner::whereName('Admin')
            ->first()
            ->roles()
            ->attach(Role::all());
    }
}
