<?php

use Illuminate\Database\Seeder;
use LaravelEnso\Addresses\Models\Region;
use LaravelEnso\Countries\Models\Country;
use LaravelEnso\Helpers\Services\JsonReader;

class RegionSeeder extends Seeder
{
    private const Regions = __DIR__.'/../../vendor/laravel-enso/addresses/database/regions.json';

    public function run()
    {
        $romania = Country::whereName('Romania')->first();

        if ($romania) {
            $this->regions()
                ->map(fn ($region) => $region + ['is_active' => true, 'country_id' => $romania->id])
                ->each(fn ($region) => Region::create($region));
        }
    }

    public function regions()
    {
        return (new JsonReader(self::Regions))->collection();
    }
}
