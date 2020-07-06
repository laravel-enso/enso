<?php

use Illuminate\Support\Collection;
use LaravelEnso\DataImport\Models\DataImport;

$factory->define(DataImport::class, fn () => [
    'type' => (new Collection(config('enso.imports.configs')))->keys()->random(),
    'successful' => 0,
    'failed' => 0,
    'chunks' => 0,
    'processed_chunks' => 0,
    'file_parsed' => false,
]);
