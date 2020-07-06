<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use LaravelEnso\Helpers\Services\JsonReader;

class LocalitySeeder extends Seeder
{
    const Localities = __DIR__.'/../../vendor/laravel-enso/addresses/database/localities';

    public function run()
    {
        $this->counties()->each(fn ($county) => DB::table('localities')
            ->insert($this->localities($county)));
    }

    private function counties(): Collection
    {
        return (new Collection(File::files(self::Localities)))
            ->when(App::runningUnitTests(), fn ($counties) => $counties->slice(0, 1));
    }

    private function localities($county): array
    {
        $fileName = self::Localities.DIRECTORY_SEPARATOR.$county->getFileName();

        return (new JsonReader($fileName))->collection()
            ->map(fn ($locality) => ['is_active' => true] + $locality)
            ->toArray();
    }
}
