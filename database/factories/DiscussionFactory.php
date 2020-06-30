<?php

use Faker\Generator as Faker;
use LaravelEnso\Discussions\Models\Discussion;

$factory->define(Discussion::class, fn (Faker $faker) => [
    'discussable_id' => $faker->randomKey,
    'discussable_type' => $faker->word,
    'body' => $faker->sentence,
    'title' => $faker->sentence,
]);
