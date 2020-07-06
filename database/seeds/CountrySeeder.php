<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;
use LaravelEnso\Countries\Models\Country;
use LaravelEnso\Helpers\Services\JsonReader;

class CountrySeeder extends Seeder
{
    private const Json = __DIR__.'/../../vendor/laravel-enso/countries/database/countries.json';

    public function run()
    {
        $this->countries()
            ->each(fn ($country) => Country::create($country));
    }

    public function countries()
    {
        return (new JsonReader(self::Json))->collection()
            ->when(App::environment('testing'), fn ($countries) => $countries->slice(0, 10));
    }
}
