<?php

use Faker\Generator as Faker;
use LaravelEnso\Comments\app\Models\Comment;

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'commentable_id' => $faker->randomKey,
        'commentable_type' => $faker->word,
        'body' => $faker->sentence,
    ];
});
