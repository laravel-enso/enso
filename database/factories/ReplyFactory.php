<?php

use Faker\Generator as Faker;
use LaravelEnso\Discussions\App\Models\Discussion;
use LaravelEnso\Discussions\App\Models\Reply;

$factory->define(Reply::class, fn (Faker $faker) => [
    'discussion_id' => fn () => factory(Discussion::class)->create()->id,
    'body' => $faker->sentence,
]);
