<?php

use Faker\Generator as Faker;
use LaravelEnso\MenuManager\app\Models\Menu;
use LaravelEnso\PermissionManager\app\Models\Permission;

$factory->define(Menu::class, function (Faker $faker) {
    return [
        'permission_id' => function () {
            return factory(Permission::class)->create()->id;
        },
        'parent_id' => null,
        'name' => $faker->word,
        'icon' => $faker->word,
        'has_children' => false,
        'order_index' => $faker->randomNumber(3),
    ];
});
