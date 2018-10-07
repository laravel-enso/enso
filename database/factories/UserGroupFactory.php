<?php

use Faker\Generator as Faker;
use LaravelEnso\Core\app\Models\UserGroup;

$factory->define(UserGroup::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->sentence,
    ];
});
