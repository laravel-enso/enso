<?php

use Faker\Generator as Faker;
use LaravelEnso\Calendar\app\Models\Event;
use LaravelEnso\Calendar\app\Models\Calendar;
use LaravelEnso\Calendar\app\Enums\Frequencies;

$factory->define(Event::class, function (Faker $faker) {
    return [
        'parent_id' => null,
        'body' => $faker->text,
        'title' => $faker->title,
        'calendar_id' => factory(Calendar::class)->create()->id,
        'frequency' => Frequencies::Once,
        'start_date' => $faker->date('Y-m-d'),
        'end_date' => $faker->date('Y-m-d'),
        'start_time' => '12:00',
        'end_time' => '14:00',
        'recurrence_ends_at' => $faker->date('Y-m-d'),
        'is_all_day' => false,
        'location' => $faker->city,
        'lat' => $faker->latitude,
        'lng' => $faker->longitude,
    ];
});
