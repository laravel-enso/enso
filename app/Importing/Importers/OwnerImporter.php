<?php

namespace App\Importing\Importers;

use App\Owner;
use LaravelEnso\DataImport\app\Classes\Importers\AbstractImporter;

class OwnerImporter extends AbstractImporter
{
    public function run()
    {
        \DB::transaction(function () {
            $sheet = $this->getSheet('owners');

            foreach ($sheet as $row) {
                $result = $this->importRow($row);
                $this->incSuccess();
            }
        });
    }

    private function importRow($row)
    {
        $owner = Owner::create($row->toArray());
    }
}
