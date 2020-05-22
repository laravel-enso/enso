<?php

use Faker\Generator as Faker;
use LaravelEnso\Addresses\App\Models\Address;
use LaravelEnso\Countries\App\Models\Country;

$factory->define(Address::class, function (Faker $faker) {
    $country = Country::inRandomOrder()->first();

    return [
        'addressable_id' => $faker->randomNumber(5),
        'addressable_type' => $faker->word,
        'country_id' => $country->id,
        'region_id' => null,
        'locality_id' => null,
        'city' => $faker->city,
        'street' => $faker->streetAddress,
        'additional' => null,
        'postcode' => $faker->postcode,
        'lat' => $faker->latitude,
        'long' => $faker->longitude,
        'notes' => $faker->realText(),
        'is_default' => true,
    ];
});
