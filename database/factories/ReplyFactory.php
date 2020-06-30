<?php

use Faker\Generator as Faker;
use LaravelEnso\Discussions\Models\Discussion;
use LaravelEnso\Discussions\Models\Reply;

$factory->define(Reply::class, fn (Faker $faker) => [
    'discussion_id' => fn () => factory(Discussion::class)->create()->id,
    'body' => $faker->sentence,
]);
