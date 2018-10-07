<?php

use Faker\Generator as Faker;
use LaravelEnso\People\app\Models\Person;
use LaravelEnso\Companies\app\Models\Company;

$factory->define(Company::class, function (Faker $faker) {
    return [
        'mandatary_id' => function () {
            return factory(Person::class)->create()->id;
        },
        'name' => $faker->company,
        'email' => $faker->email,
        'phone' => $faker->phoneNumber,
        'fax' => $faker->phoneNumber,
        'mandatary_position' => $faker->jobTitle,
        'bank' => $faker->company,
        'bank_account' => $faker->bankAccountNumber,
        'obs' => $faker->sentence,
        'pays_vat' => $faker->boolean,
    ];
});
