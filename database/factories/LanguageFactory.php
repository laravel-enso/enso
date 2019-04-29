<?php

use Faker\Generator as Faker;
use LaravelEnso\Localisation\app\Models\Language;

$factory->define(Language::class, function (Faker $faker) {
    $countryCode = $faker->countryCode;

    return [
        'name' => $countryCode = $faker->countryCode,
        'display_name' => strtolower($faker->country),
        'flag' => 'flag-icon flag-icon-'.$countryCode = $faker->countryCode,
        'is_rtl' => $faker->boolean,
        'is_active' => $faker->boolean,
    ];
});
