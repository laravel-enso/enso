<?php

use Faker\Generator as Faker;
use LaravelEnso\Addresses\app\Models\Address;

$factory->define(Address::class, function (Faker $faker) {
    return [
        'addressable_id' => $faker->randomKey,
        'addressable_type' => $faker->word,
        'country_id' => $faker->randomDigit,
        'apartment' => $faker->word,
        'street' => $faker->streetAddress,
        'city' => $faker->city,
        'is_default' => true,
    ];
});
