<?php

use Faker\Generator as Faker;
use LaravelEnso\Menus\App\Models\Menu;
use LaravelEnso\Roles\App\Models\Role;

$factory->define(Role::class, fn (Faker $faker) => [
    'name' => $faker->word,
    'display_name' => $faker->word,
    'description' => $faker->sentence,
    'menu_id' => fn () => factory(Menu::class)->create()->id,
]);
