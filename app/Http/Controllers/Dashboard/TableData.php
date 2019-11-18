<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Routing\Controller;
use LaravelEnso\Examples\Tables\Builders\ExampleTable;
use LaravelEnso\Tables\app\Traits\Data;

class TableData extends Controller
{
    use Data;

    protected $tableClass = ExampleTable::class;
}
