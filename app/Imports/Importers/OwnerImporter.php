<?php

namespace App\Imports\Importers;

use App\Owner;
use LaravelEnso\DataImport\app\Classes\Importers\Importer;

class OwnerImporter extends Importer
{
    public function run()
    {
        \DB::transaction(function () {
            $this->rowsFromSheet('owners')
                ->each(function ($row) {
                    $this->importRow($row);
                });
        });
    }

    private function importRow($row)
    {
        Owner::create($row->toArray());

        $this->incSuccess();
    }
}
