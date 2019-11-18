<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Routing\Controller;
use LaravelEnso\Tables\app\Traits\Data;
use LaravelEnso\Examples\Tables\Builders\ExampleTable;

class TableData extends Controller
{
    use Data;

    protected $tableClass = ExampleTable::class;
}
