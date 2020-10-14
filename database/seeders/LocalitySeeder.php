<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use LaravelEnso\Countries\Models\Country;
use LaravelEnso\Helpers\Services\JsonReader;

class LocalitySeeder extends Seeder
{
    public function run()
    {
        $this->countries()->each(fn (Country $country) => $this->counties($country)
            ->each(fn ($county) => DB::table('localities')
                ->insert($this->localities($country, $county))));
    }

    private function counties(Country $country): Collection
    {
        return (new Collection(File::files($this->path([$country->iso_3166_3]))))
            ->when(App::runningUnitTests(), fn ($counties) => $counties->slice(0, 1));
    }

    private function localities(Country $country, $county): array
    {
        return (new JsonReader($this->path([$country->iso_3166_3, $county->getFileName()])))->collection()
            ->map(fn ($locality) => (new Collection($locality))
                ->mapWithKeys(fn ($value, $key) => [Str::snake($key) => $value])
                ->put('created_at', Carbon::now())
                ->put('updated_at', Carbon::now())
                ->toArray())
            ->toArray();
    }

    private function countries(): Collection
    {
        return (new Collection(File::directories($this->path())))
            ->map(fn ($dir) => Country::where('iso_3166_3', basename($dir))->first())
            ->filter();
    }

    private function path(array $path = []): string
    {
        return (new Collection([
            base_path('vendor/laravel-enso/addresses/database/cities'),
            ...$path,
        ]))->implode(DIRECTORY_SEPARATOR);
    }
}
