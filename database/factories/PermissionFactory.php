<?php

use Faker\Generator as Faker;
use LaravelEnso\Permissions\app\Enums\Types;
use LaravelEnso\Permissions\app\Models\Permission;

$factory->define(Permission::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->sentence,
        'type' => Types::keys()->random(),
        'is_default' => $faker->boolean,
    ];
});
