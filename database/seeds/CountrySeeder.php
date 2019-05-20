<?php

use Illuminate\Database\Seeder;
use LaravelEnso\Addresses\app\Models\Country;

class CountrySeeder extends Seeder
{
    const CountriesJSON = __DIR__.'/../../vendor/laravel-enso/addresses/src/database/countries.json';

    public function run()
    {
        if (config('app.env') === 'testing') {
            $this->countries()
                ->slice(0, 10)
                ->each(function ($country) {
                    Country::create($country);
                });

            return;
        }

        $this->countries()
            ->each(function ($country) {
                Country::create($country);
            });
    }

    public function countries()
    {
        $countries = json_decode(\File::get(self::CountriesJSON), true);

        return collect($countries);
    }
}
