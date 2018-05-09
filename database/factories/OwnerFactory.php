<?php

use App\Owner;
use Faker\Generator as Faker;

$factory->define(Owner::class, function (Faker $faker) {
    return [
        'name' => $faker->firstName,
        'description' => $faker->sentence,
        'is_active' => 1,
    ];
});
