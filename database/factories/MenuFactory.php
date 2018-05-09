<?php

use Faker\Generator as Faker;
use LaravelEnso\MenuManager\app\Models\Menu;

$factory->define(Menu::class, function (Faker $faker) {
    return [
        'parent_id' => null,
        'name' => $faker->word,
        'icon' => $faker->word,
        'link' => null,
        'has_children' => 0,
        'order' => 999,
    ];
});
