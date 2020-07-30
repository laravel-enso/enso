<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use LaravelEnso\Addresses\Models\Locality;
use LaravelEnso\Addresses\Models\Postcode;
use LaravelEnso\Addresses\Models\Region;
use LaravelEnso\Countries\Models\Country;
use LaravelEnso\Helpers\Services\JsonReader;
use Symfony\Component\Finder\SplFileInfo;

class PostcodeSeeder extends Seeder
{
    public function run()
    {
        DB::transaction(fn () => $this->countries()
            ->each(fn (Country $country) => $this->importPostCodes($country)));
    }

    private function countries(): Collection
    {
        return (new Collection(File::files($this->path())))
            ->map(fn (SplFileInfo $file) => Country::where('iso_3166_3', $file->getBasename('.json'))->first())
            ->filter();
    }

    private function importPostCodes(Country $country)
    {
        $regions = Region::whereCountryId($country->id)->get()
            ->mapWithKeys(fn ($region) => [$region->abbreviation => $region->id]);

        $localities = Locality::whereHas('region', fn ($query) => $query->whereCountryId($country->id))
            ->get()
            ->mapWithKeys(fn ($locality) => ["{$locality->region_id}_{$locality->name}" => $locality->id]);

        $this->postcodes($country)
            ->filter(fn ($postcode) => isset($regions[$postcode['region']]))
            ->map(fn ($postcode) => (new Collection($postcode))
                ->put('locality_id', isset($postcode['locality'])
                    ? $localities->get("{$regions[$postcode['region']]}_{$postcode['locality']}")
                    : null)
                ->put('country_id', $country->id)
                ->put('region_id', $regions[$postcode['region']])
                ->put('created_at', Carbon::now())
                ->put('updated_at', Carbon::now())
                ->forget(['locality', 'region'])
                ->toArray())
            ->chunk(250)
            ->each(fn ($postcodes) => Postcode::insert($postcodes->toArray()));
    }

    private function postcodes(Country $country): Collection
    {
        return (new JsonReader($this->path(["{$country->iso_3166_3}.json"])))
            ->collection()
            ->unique(fn ($postcode) => $postcode['code']);
    }

    private function path(array $path = []): string
    {
        return (new Collection([
            base_path('vendor/laravel-enso/addresses/database/postcodes'),
            ...$path,
        ]))->implode(DIRECTORY_SEPARATOR);
    }
}
