<?php

namespace App\Http\Controllers\Administration\Owner;

use App\Owner;
use App\Http\Controllers\Controller;
use LaravelEnso\VueDatatable\app\Traits\Excel;
use LaravelEnso\VueDatatable\app\Traits\Datatable;

class OwnerTableController extends Controller
{
    use Datatable, Excel;

    private const Template = __DIR__.'/../../../../Tables/owners.json';

    public function query()
    {
        return Owner::select(\DB::raw('id as "dtRowId", name, description, is_active, created_at'));
    }
}
