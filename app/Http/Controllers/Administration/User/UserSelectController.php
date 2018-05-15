<?php

namespace App\Http\Controllers\Administration\User;

use App\User;
use App\Http\Controllers\Controller;
use LaravelEnso\Select\app\Traits\OptionsBuilder;

class UserSelectController extends Controller
{
    use OptionsBuilder;

    protected $model = User::class;

    protected $queryAttributes = [
        'first_name', 'last_name', 'email', 'phone',
    ];
}
