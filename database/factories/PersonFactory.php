<?php

use Faker\Generator as Faker;
use LaravelEnso\People\app\Enums\Titles;
use LaravelEnso\People\app\Enums\Genders;
use LaravelEnso\People\app\Models\Person;

$factory->define(Person::class, function (Faker $faker) {
    $title = Titles::keys()->random();
    $gender = $title === Titles::Mr
        ? Genders::Male
        : Genders::Female;

    return [
        'title' => $title,
        'name' => $faker->name(lcfirst(Genders::get($gender))),
        'appellative' => $faker->firstName(lcfirst(Genders::get($gender))),
        'email' => $faker->unique()->safeEmail,
        'phone' => $faker->phoneNumber,
        'birthday' => now()->subYears(rand(15, 40)),
    ];
});
