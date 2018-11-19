<?php

use Faker\Generator as Faker;
use LaravelEnso\Discussions\app\Models\Reply;
use LaravelEnso\Discussions\app\Models\Discussion;

$factory->define(Reply::class, function (Faker $faker) {
    return [
        'discussion_id' => function () {
            return factory(Discussion::class)->create()->id;
        },
        'body' => $faker->sentence,
    ];
});
