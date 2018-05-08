<?php

use LaravelEnso\Core\app\Models\Owner;
use LaravelEnso\RoleManager\app\Models\Role;
use Illuminate\Database\Migrations\Migration;

class InsertDefaultOwner extends Migration
{
    public function up()
    {
        \DB::transaction(function () {
            $roles = Role::all();

            $owner = Owner::create([
                'name' => 'Admin',
                'is_active' => true,
            ]);

            $owner->roles()->attach($roles);
        });
    }

    public function down()
    {
        \DB::table('owners')->delete();
    }
}
