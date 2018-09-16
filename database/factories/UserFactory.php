<?php

use Faker\Generator as Faker;
use LaravelEnso\Core\app\Models\User;

$factory->define(User::class, function (Faker $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'role_id' => factory('LaravelEnso\RoleManager\app\Models\Role')->create(),
        'phone' => $faker->phoneNumber,
        'is_active' => 1,
        'email' => $faker->email,
        'owner_id' => factory(config('enso.config.ownerModel'))->create(),
    ];
});
