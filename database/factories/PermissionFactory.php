<?php

use Faker\Generator as Faker;
use LaravelEnso\Permissions\Models\Permission;

$factory->define(Permission::class, fn (Faker $faker) => [
    'name' => $faker->unique()->word,
    'description' => $faker->sentence,
    'is_default' => $faker->boolean,
]);
