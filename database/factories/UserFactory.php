<?php

use Faker\Generator as Faker;
use LaravelEnso\Core\App\Models\User;
use LaravelEnso\Core\App\Models\UserGroup;
use LaravelEnso\People\App\Models\Person;
use LaravelEnso\Roles\App\Models\Role;

$factory->define(User::class, function (Faker $faker, $attributes = null) {
    if (isset($attributes['person_id']) && isset($attributes['email'])) {
        $personId = $attributes['person_id'];
        $email = $attributes['email'];
    } else {
        $person = factory(Person::class)->create();
        $personId = $person->id;
        $email = $person->email;
    }

    return [
        'person_id' => $personId,
        'group_id' => fn () => factory(UserGroup::class)->create()->id,
        'email' => $email,
        'role_id' => fn () => factory(Role::class)->create()->id,
        'is_active' => $faker->boolean,
    ];
});
