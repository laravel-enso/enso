<?php

namespace Database\Factories;

use LaravelEnso\Users\Database\Factories\UserFactory as CoreUserFactory;
use LaravelEnso\Users\Models\User;
use LaravelEnso\UserGroups\Models\UserGroup;
use LaravelEnso\People\Models\Person;
use LaravelEnso\Roles\Models\Role;

class UserFactory extends CoreUserFactory
{
    protected $model = User::class;

    public function definition()
    {
        return [
            'person_id' => Person::factory(),
            'group_id' => UserGroup::factory(),
            'email' => fn ($attributes) => Person::find($attributes['person_id'])->email,
            'role_id' => Role::factory(),
            'is_active' => $this->faker->boolean,
        ];
    }
}
