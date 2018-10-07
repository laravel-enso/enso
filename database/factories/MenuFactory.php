<?php

use Faker\Generator as Faker;
use LaravelEnso\MenuManager\app\Models\Menu;

$factory->define(Menu::class, function (Faker $faker) {
    return [
        'parent_id' => null,
        'name' => $faker->word,
        'link' => $faker->url,
        'icon' => $faker->word,
        'has_children' => false,
        'order_index' => $faker->randomNumber(3),
    ];
});
