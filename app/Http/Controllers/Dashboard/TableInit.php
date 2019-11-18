<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Routing\Controller;
use LaravelEnso\Examples\Tables\Builders\ExampleTable;
use LaravelEnso\Tables\app\Traits\Init;

class TableInit extends Controller
{
    use Init;

    protected $tableClass = ExampleTable::class;
}
