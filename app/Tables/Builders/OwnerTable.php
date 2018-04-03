<?php

namespace App\Tables\Builders;

use App\Owner;
use LaravelEnso\VueDatatable\app\Classes\Table;

class OwnerTable extends Table
{
    protected $templatePath = __DIR__.'/../Templates/owners.json';

    public function query()
    {
        return Owner::select(\DB::raw('
            id as "dtRowId", name, description, is_active, created_at
        '));
    }
}
