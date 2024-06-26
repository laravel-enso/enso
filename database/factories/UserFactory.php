<?php

namespace Database\Factories;

use LaravelEnso\People\Models\Person;
use LaravelEnso\Roles\Models\Role;
use LaravelEnso\UserGroups\Models\UserGroup;
use LaravelEnso\Users\Database\Factories\UserFactory as CoreUserFactory;
use LaravelEnso\Users\Models\User;

class UserFactory extends CoreUserFactory
{
    protected $model = User::class;

    public function definition(): array
    {
        return [
            'person_id' => Person::factory()->test(),
            'group_id' => UserGroup::factory(),
            'email' => fn ($attributes) => Person::find($attributes['person_id'])->email,
            'role_id' => Role::factory(),
            'is_active' => $this->faker->boolean,
            'password' => bcrypt($this->faker->password),
        ];
    }
}
