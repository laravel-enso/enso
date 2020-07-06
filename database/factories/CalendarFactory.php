<?php

use Faker\Generator as Faker;
use LaravelEnso\Calendar\Enums\Colors;
use LaravelEnso\Calendar\Models\Calendar;

$factory->define(Calendar::class, fn (Faker $faker) => [
    'name' => $faker->text,
    'color' => Colors::values()->random(),
    'private' => false,
]);
