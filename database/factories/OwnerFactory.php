<?php

use Faker\Generator as Faker;

$factory->define(config('enso.config.ownerModel'), function (Faker $faker) {
    return [
        'name' => $faker->firstName,
        'description' => $faker->sentence,
        'is_active' => 1,
    ];
});
