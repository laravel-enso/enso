<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Routing\Controller;
use LaravelEnso\Examples\app\Models\Example;
use LaravelEnso\Select\app\Traits\OptionsBuilder;

class EmployeeSelectController extends Controller
{
    use OptionsBuilder;

    protected $model = Example::class;
}
