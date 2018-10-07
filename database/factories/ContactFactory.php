<?php

use Faker\Generator as Faker;
use LaravelEnso\Contacts\app\Models\Contact;

$factory->define(Contact::class, function (Faker $faker) {
    return [
        'contactable_id' => $faker->randomKey,
        'contactable_type' => $faker->word,
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'email' => $faker->unique()->safeEmail,
        'phone' => $faker->phoneNumber,
        'position' => $faker->jobTitle,
        'is_active' => $faker->boolean,
    ];
});
