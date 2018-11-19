<?php

use Faker\Generator as Faker;
use LaravelEnso\Companies\app\Models\Company;
use LaravelEnso\Discussions\app\Models\Discussion;

$factory->define(Discussion::class, function (Faker $faker) {
    return [
        'discussable_id' => function () {
            return factory(Company::class)->create()->id;
        },
        'discussable_type' => Company::class,
        'body' => $faker->sentence,
        'title' => $faker->sentence,
    ];
});
