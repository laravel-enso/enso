<?php

use Faker\Generator as Faker;
use LaravelEnso\Discussions\app\Models\Discussion;
use LaravelEnso\Discussions\app\Models\Reply;

$factory->define(Reply::class, function (Faker $faker) {
    return [
        'discussion_id' => function () {
            return factory(Discussion::class)->create()->id;
        },
        'body' => $faker->sentence,
    ];
});
