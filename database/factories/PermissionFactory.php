<?php

use Faker\Generator as Faker;
use LaravelEnso\Permissions\App\Enums\Types;
use LaravelEnso\Permissions\App\Models\Permission;

$factory->define(Permission::class, fn (Faker $faker) => [
    'name' => $faker->word,
    'description' => $faker->sentence,
    'type' => Types::keys()->random(),
    'is_default' => $faker->boolean,
]);
