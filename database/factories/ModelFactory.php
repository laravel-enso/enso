<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Owner::class, function (Faker\Generator $faker) {
    return [
        'name'        => $this->faker->firstName,
        'description' => $this->faker->sentence,
        'is_active'   => 1,
    ];
});

$factory->define(LaravelEnso\MenuManager\app\Models\Menu::class, function (Faker\Generator $faker) {
    return [
        'parent_id'                  => null,
        'name'                       => $this->faker->word,
        'icon'                       => $this->faker->word,
        'link'                       => null,
        'has_children'               => 0,
    ];
});

$factory->define(LaravelEnso\RoleManager\app\Models\Role::class, function (Faker\Generator $faker) {
    return [
        'name'                 => $this->faker->word,
        'display_name'         => $this->faker->word,
        'description'          => $this->faker->sentence,
        'menu_id'              => factory('LaravelEnso\MenuManager\app\Models\Menu')->create(),
    ];
});

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'first_name'                 => $this->faker->firstName,
        'last_name'                  => $this->faker->lastName,
        'role_id'                    => factory('LaravelEnso\RoleManager\app\Models\Role')->create(),
        'phone'                      => $this->faker->phoneNumber,
        'is_active'                  => 1,
        'email'                      => $this->faker->email,
        'owner_id'                   => factory('App\Owner')->create(),
    ];
});
