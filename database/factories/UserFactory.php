<?php

use Faker\Generator as Faker;
use LaravelEnso\Core\app\Models\User;
use LaravelEnso\People\app\Models\Person;
use LaravelEnso\Core\app\Models\UserGroup;
use LaravelEnso\RoleManager\app\Models\Role;

$factory->define(User::class, function (Faker $faker) {
    $person = factory(Person::class)->create();

    return [
        'person_id' => $person->id,
        'group_id' => function () {
            return factory(UserGroup::class)->create()->id;
        },
        'email' => $person->email,
        'role_id' => function () {
            return factory(Role::class)->create()->id;
        },
        'is_active' => $faker->boolean,
    ];
});
