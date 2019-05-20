<?php

use Faker\Generator as Faker;
use LaravelEnso\Menus\app\Models\Menu;
use LaravelEnso\Roles\app\Models\Role;

$factory->define(Role::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'display_name' => $faker->word,
        'description' => $faker->sentence,
        'menu_id' => function () {
            return factory(Menu::class)->create()->id;
        },
    ];
});
