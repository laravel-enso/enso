<?php

namespace App\Http\Controllers\Examples;

use App\Example;
use App\Http\Controllers\Controller;
use LaravelEnso\Select\app\Traits\OptionsBuilder;

class EmployeeSelectController extends Controller
{
    use OptionsBuilder;

    protected $model = Example::class;
}
