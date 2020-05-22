<?php

use Illuminate\Database\Seeder;
use LaravelEnso\Addresses\App\Models\Region;
use LaravelEnso\Countries\App\Models\Country;
use LaravelEnso\Helpers\App\Classes\JsonReader;

class StateSeeder extends Seeder
{
    private const States = __DIR__.'/../../vendor/laravel-enso/addresses/src/database/states.json';

    public function run()
    {
        $us = Country::whereName('United States')->first();

        if ($us) {
            $this->regions()
                ->each(fn ($region) => Region::create($region + ['country_id' => $us->id]));
        }
    }

    public function regions()
    {
        return (new JsonReader(self::States))->collection();
    }
}
