<?php

namespace App\Http\Controllers\Administration\User;

use App\User;
use App\Http\Controllers\Controller;
use LaravelEnso\VueDatatable\app\Traits\Excel;
use LaravelEnso\VueDatatable\app\Traits\Datatable;

class UserTableController extends Controller
{
    use Datatable, Excel;

    private const Template = __DIR__.'/../../../../Tables/users.json';

    public function query()
    {
        return User::select(\DB::raw(
                'users.id as "dtRowId", owners.name as owner, users.first_name, users.last_name, users.phone,
                users.email, roles.name as role, users.is_active'
            ))->join('owners', 'users.owner_id', '=', 'owners.id')
            ->join('roles', 'users.role_id', '=', 'roles.id');
    }
}
