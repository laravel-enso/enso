<?php

use Faker\Generator as Faker;
use LaravelEnso\TutorialManager\app\Enums\Placement;
use LaravelEnso\TutorialManager\app\Models\Tutorial;
use LaravelEnso\PermissionManager\app\Models\Permission;

$factory->define(Tutorial::class, function (Faker $faker) {
    return [
        'permission_id' => function () {
            return factory(Permission::class)->create()->id;
        },
        'element' => $faker->word,
        'title' => $faker->word,
        'content' => $faker->sentence,
        'placement' => Placement::keys()->random(),
        'order_index' => $faker->randomNumber(2),
    ];
});
