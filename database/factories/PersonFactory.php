<?php

use Faker\Generator as Faker;
use LaravelEnso\People\app\Enums\Titles;
use LaravelEnso\People\app\Enums\Genders;
use LaravelEnso\People\app\Models\Person;

$factory->define(Person::class, function (Faker $faker) {
    $gender = Genders::keys()->random();

    return [
        'title' => Titles::keys()->random(),
        'name' => $faker->name(lcfirst(Genders::get($gender))),
        'appellative' => $faker->firstName(lcfirst(Genders::get($gender))),
        'email' => $faker->unique()->safeEmail,
        'phone' => $faker->phoneNumber,
        'gender' => $gender,
        'birthday' => now()->subYears(rand(15, 40)),
    ];
});
