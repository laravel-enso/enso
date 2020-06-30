<?php

use Faker\Generator as Faker;
use LaravelEnso\Calendar\Models\Event;
use LaravelEnso\Calendar\Models\Reminder;

$factory->define(Reminder::class, fn (Faker $faker) => [
    'event_id' => fn () => factory(Event::class)->create()->id,
    'scheduled_at' => $faker->dateTime,
]);
