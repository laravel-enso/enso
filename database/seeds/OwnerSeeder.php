<?php

use App\Owner;
use Illuminate\Database\Seeder;
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
