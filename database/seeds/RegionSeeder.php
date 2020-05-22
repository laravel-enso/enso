<?php

use Illuminate\Database\Seeder;
use LaravelEnso\Addresses\App\Models\Region;
use LaravelEnso\Countries\App\Models\Country;
use LaravelEnso\Helpers\App\Classes\JsonReader;

class RegionSeeder extends Seeder
{
    private const Regions = __DIR__.'/../../vendor/laravel-enso/addresses/src/database/regions.json';

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
