<?php

namespace App\Http\Controllers\Administration\Owner;

use App\Owner;
use App\Http\Controllers\Controller;
use LaravelEnso\Select\app\Traits\OptionsBuilder;

class OwnerSelectController extends Controller
{
    use OptionsBuilder;

    public function query()
    {
        return Owner::active();
    }
}
