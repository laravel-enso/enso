<?php

use Faker\Generator as Faker;
use LaravelEnso\Calendar\App\Models\Event;
use LaravelEnso\Calendar\App\Models\Reminder;

$factory->define(Reminder::class, fn (Faker $faker) => [
    'event_id' => factory(Event::class)->create()->id,
    'scheduled_at' => $faker->dateTime,
]);
