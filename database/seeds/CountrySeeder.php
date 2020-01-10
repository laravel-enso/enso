<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\File;
use LaravelEnso\Countries\App\Models\Country;

class CountrySeeder extends Seeder
{
    const JSON = __DIR__.'/../../vendor/laravel-enso/countries/src/database/countries.json';

    public function run()
    {
        $this->countries()
            ->each(fn ($country) => Country::create($country));
    }

    public function countries()
    {
        return (new Collection(json_decode(File::get(self::JSON), true)))
            ->when(App::environment('testing'), fn ($countries) => $countries->slice(0, 10));
    }
}
