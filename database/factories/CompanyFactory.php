<?php

use Faker\Generator as Faker;
use LaravelEnso\Companies\Enums\Statuses;
use LaravelEnso\Companies\Models\Company;

$factory->define(Company::class, fn (Faker $faker) => [
    'name' => $faker->unique()->company,
    'fiscal_code' => $faker->ean8,
    'reg_com_nr' => $faker->ean13,
    'email' => $faker->email,
    'phone' => $faker->phoneNumber,
    'fax' => $faker->phoneNumber,
    'bank' => $faker->company,
    'bank_account' => $faker->bankAccountNumber,
    'notes' => $faker->sentence,
    'pays_vat' => $faker->boolean,
    'is_tenant' => false,
    'status' => Statuses::Active,
]);
