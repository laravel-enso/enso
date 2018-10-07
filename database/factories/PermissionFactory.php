<?php

use Faker\Generator as Faker;
use LaravelEnso\PermissionManager\app\Models\Permission;
use LaravelEnso\PermissionManager\app\Enums\PermissionTypes;
use LaravelEnso\PermissionManager\app\Models\PermissionGroup;

$factory->define(Permission::class, function (Faker $faker) {
    return [
        'permission_group_id' => function () {
            return factory(PermissionGroup::class)->create()->id;
        },
        'name' => $faker->word,
        'description' => $faker->sentence,
        'type' => PermissionTypes::keys()->random(),
        'is_default' => $faker->boolean,
    ];
});
