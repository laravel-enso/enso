<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use LaravelEnso\Core\Enums\UserGroups;
use LaravelEnso\Core\Models\User;
use LaravelEnso\Core\Models\UserGroup;
use LaravelEnso\People\Enums\Titles;
use LaravelEnso\People\Models\Person;
use LaravelEnso\Permissions\Models\Permission;
use LaravelEnso\Roles\Models\Role;

class ControlPanelApiSeeder extends Seeder
{
    private const email = 'monitoring@laravel-enso.com';
    private ?Person $person;

    public function run()
    {
        DB::transaction(function () {
            $this->user();
        });
    }

    public function user(): void
    {
        factory(User::class)->create([
            'person_id' => $this->person()->id,
            'group_id' => UserGroup::find(UserGroups::Admin)->id,
            'email' => $this->person()->email,
            'password' => '!',
            'role_id' => $this->role()->id,
            'is_active' => true,
        ]);
    }

    private function person()
    {
        return $this->person ??= factory(Person::class)->create([
            'title' => Titles::Mr,
            'name' => 'Monitoring',
            'appellative' => 'Monitoring',
            'email' => self::email,
            'birthday' => '1924-12-24',
            'phone' => '+40793232522',
        ]);
    }

    private function role()
    {
        $role = factory(Role::class)->create([
            'menu_id' => null,
            'name' => 'monitoring',
            'display_name' => 'monitoring',
            'description' => 'Monitoring role.',
        ]);

        $role->permissions()->sync(
            Permission::where('name', 'like', 'apis.%')->pluck('id')
        );

        return $role;
    }
}
