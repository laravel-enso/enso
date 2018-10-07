<?php

use Illuminate\Database\Seeder;
use LaravelEnso\People\app\Enums\Titles;
use LaravelEnso\People\app\Enums\Genders;
use LaravelEnso\People\app\Models\Person;

class PersonSeeder extends Seeder
{
    public function run()
    {
        factory(Person::class)->create([
            'title' => Titles::Mr,
            'name' => 'Admin Root',
            'appellative' => 'Admin',
            'email' => 'admin@laravel-enso.com',
            'gender' => Genders::Male,
            'birthday' => '1980-01-19',
            'phone' => '+40793232522',
        ]);
    }
}
