<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
 */

$factory->define(App\Example::class, function (Faker\Generator $faker) {
    $salary = $faker->numberBetween($min = 1100, $max = 5500);

    return [
        'name' => $faker->name,
        'position' => $faker->jobTitle,
        'seniority' => $faker->numberBetween($min = 1, $max = 5),
        'project' => $faker->randomElement(['Enso SPA', 'AdminLTE', 'Webshop']),
        'salary' => $salary,
        'taxes' => round($salary * 0.81, 2),
        'is_active' => $faker->boolean,
        'hired_at' => $faker->dateTimeBetween($startDate = '-5 years', $endDate = 'now'),
    ];
});
