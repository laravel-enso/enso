<?php

use Faker\Generator as Faker;
use LaravelEnso\Core\app\Models\User;
use LaravelEnso\Roles\app\Models\Role;
use LaravelEnso\People\app\Models\Person;
use LaravelEnso\Core\app\Models\UserGroup;

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
        'group_id' => function () {
            return factory(UserGroup::class)->create()->id;
        },
        'email' => $email,
        'role_id' => function () {
            return factory(Role::class)->create()->id;
        },
        'is_active' => $faker->boolean,
    ];
});
