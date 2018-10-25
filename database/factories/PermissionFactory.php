<?php

use Faker\Generator as Faker;
use LaravelEnso\PermissionManager\app\Models\Permission;
use LaravelEnso\PermissionManager\app\Enums\PermissionTypes;

$factory->define(Permission::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->sentence,
        'type' => PermissionTypes::keys()->random(),
        'is_default' => $faker->boolean,
    ];
});
