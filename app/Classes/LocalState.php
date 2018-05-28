<?php

namespace App\Classes;

use LaravelEnso\Core\app\Contracts\StateBuilder;

class LocalState implements StateBuilder
{
    public function build()
    {
        return [];
    }
}
