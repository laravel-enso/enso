<?php

use Faker\Generator as Faker;
use LaravelEnso\Addresses\App\Models\Address;
use LaravelEnso\Countries\App\Models\Country;

$factory->define(Address::class, fn (Faker $faker) => [
    'addressable_id' => $faker->randomKey,
    'addressable_type' => $faker->word,
    'country_id' => Country::inRandomOrder()->first()->id,
    'apartment' => $faker->word,
    'street' => $faker->streetAddress,
    'city' => $faker->city,
    'is_default' => true,
]);
