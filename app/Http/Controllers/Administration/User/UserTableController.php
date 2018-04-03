<?php

namespace App\Http\Controllers\Administration\User;

use App\Tables\Builders\UserTable;
use App\Http\Controllers\Controller;
use LaravelEnso\VueDatatable\app\Traits\Excel;
use LaravelEnso\VueDatatable\app\Traits\Datatable;

class UserTableController extends Controller
{
    use Datatable, Excel;

    protected $tableClass = UserTable::class;
}
