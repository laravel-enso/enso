<?php

use LaravelEnso\Core\app\Models\User;
use LaravelEnso\Core\app\Models\Owner;
use LaravelEnso\RoleManager\app\Models\Role;
use Illuminate\Database\Migrations\Migration;

class InsertDefaultUser extends Migration
{
    public function up()
    {
        $user = new User();
        $user->password = '$2y$10$06TrEefmqWBO7xghm2PUzeF/O0wcawFUv8TKYq.NF6Dsa0Pnmd/F2';
        $user->email = 'admin@laravel-enso.com';
        $user->first_name = 'Admin';
        $role = Role::whereName('admin')->first();
        $user->role_id = $role->id;
        $owner = Owner::whereName('Admin')->first();
        $user->owner_id = $owner->id;
        $user->is_active = true;
        $user->save();
    }

    public function down()
    {
        \DB::table('users')->delete();
    }
}
