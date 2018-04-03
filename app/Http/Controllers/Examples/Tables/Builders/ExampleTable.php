<?php

namespace App\Http\Controllers\Examples\Tables\Builders;

use App\Example;
use LaravelEnso\VueDatatable\app\Classes\Table;

class ExampleTable extends Table
{
    protected $templatePath = __DIR__.'/../Templates/exampleTable.json';

    public function query()
    {
        return Example::select(\DB::raw(
            'id as "dtRowId", name, position, seniority, project,
            salary, taxes, is_active, hired_at'
        ));
    }
}
