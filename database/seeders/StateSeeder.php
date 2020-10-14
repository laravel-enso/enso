<?php

use Illuminate\Database\Seeder;
use LaravelEnso\Addresses\Models\Region;
use LaravelEnso\Countries\Models\Country;
use LaravelEnso\Helpers\Services\JsonReader;

class StateSeeder extends Seeder
{
    private const States = __DIR__.'/../../vendor/laravel-enso/addresses/database/states.json';

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
