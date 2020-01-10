<?php

use Faker\Generator as Faker;
use LaravelEnso\Calendar\App\Enums\Colors;
use LaravelEnso\Calendar\App\Models\Calendar;

$factory->define(Calendar::class, fn (Faker $faker) => [
    'name' => $faker->text,
    'color' => Colors::values()->random(),
    'private' => false,
]);
