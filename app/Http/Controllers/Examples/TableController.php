<?php

namespace App\Http\Controllers\Examples;

use App\Http\Controllers\Controller;
use LaravelEnso\VueDatatable\app\Traits\Excel;
use LaravelEnso\VueDatatable\app\Traits\Datatable;
use App\Http\Controllers\Examples\Tables\Builders\ExampleTable;

class TableController extends Controller
{
    use Datatable, Excel;

    protected $tableClass = ExampleTable::class;
}
