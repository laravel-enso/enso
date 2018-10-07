<?php

use Faker\Generator as Faker;
use LaravelEnso\PermissionManager\app\Models\PermissionGroup;

$factory->define(PermissionGroup::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->sentence,
    ];
});
