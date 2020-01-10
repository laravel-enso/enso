<?php

use Faker\Generator as Faker;
use LaravelEnso\Comments\App\Models\Comment;

$factory->define(Comment::class, fn (Faker $faker) => [
    'commentable_id' => $faker->randomKey,
    'commentable_type' => $faker->word,
    'body' => $faker->sentence,
]);
