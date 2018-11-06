<?php

use Faker\Generator as Faker;
use LaravelEnso\People\app\Models\Person;
use LaravelEnso\Companies\app\Models\Company;
use LaravelEnso\Companies\app\Models\Contact;

$factory->define(Contact::class, function (Faker $faker) {
    return [
        'company_id' => function () {
            return factory(Company::class)->create()->id;
        },
        'person_id' => function () {
            return factory(Person::class)->create()->id;
        },
        'position' => $faker->jobTitle,
    ];
});
