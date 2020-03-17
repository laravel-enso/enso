<?php

use Faker\Generator as Faker;
use LaravelEnso\Permissions\App\Models\Permission;

$factory->define(Permission::class, fn (Faker $faker) => [
    'name' => $faker->word,
    'description' => $faker->sentence,
    'is_default' => $faker->boolean,
]);
