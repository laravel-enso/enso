<?php

use Faker\Generator as Faker;
use LaravelEnso\Companies\app\Models\Company;

$factory->define(Company::class, function (Faker $faker) {
    return [
        'mandatary_id' => null,
        'name' => $faker->company,
        'email' => $faker->email,
        'phone' => $faker->phoneNumber,
        'fax' => $faker->phoneNumber,
        'bank' => $faker->company,
        'bank_account' => $faker->bankAccountNumber,
        'obs' => $faker->sentence,
        'pays_vat' => $faker->boolean,
        'is_tenant' => false,
    ];
});
