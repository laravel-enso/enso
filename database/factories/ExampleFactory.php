<?php

use LaravelEnso\Examples\app\Enums\SeniorityEnum;

$factory->define(App\Example::class, function (Faker\Generator $faker) {
    $salary = $faker->numberBetween($min = 1100, $max = 5500);

    return [
        'name' => $faker->name,
        'position' => $faker->jobTitle,
        'seniority' => SeniorityEnum::keys()->random(),
        'project' => $faker->randomElement(['Enso SPA', 'AdminLTE', 'Webshop']),
        'salary' => $salary,
        'taxes' => round($salary * 0.81, 2),
        'is_active' => $faker->boolean,
        'hired_at' => $faker->dateTimeBetween($startDate = '-5 years', $endDate = 'now'),
    ];
});
