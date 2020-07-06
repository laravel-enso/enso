<?php

use Carbon\Carbon;
use Faker\Generator as Faker;
use LaravelEnso\People\Enums\Genders;
use LaravelEnso\People\Enums\Titles;
use LaravelEnso\People\Models\Person;

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
        'birthday' => Carbon::now()->subYears(rand(15, 40)),
        'bank' => $faker->word,
        'bank_account' => $faker->bankAccountNumber,
    ];
});
