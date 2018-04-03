<?php

namespace App\Http\Controllers\Administration\Owner;

use App\Tables\Builders\OwnerTable;
use App\Http\Controllers\Controller;
use LaravelEnso\VueDatatable\app\Traits\Excel;
use LaravelEnso\VueDatatable\app\Traits\Datatable;

class OwnerTableController extends Controller
{
    use Datatable, Excel;

    protected $tableClass = OwnerTable::class;
}
