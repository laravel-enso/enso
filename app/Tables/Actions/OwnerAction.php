<?php

namespace App\Tables\Actions;

use LaravelEnso\VueDatatable\app\Classes\Action;

class OwnerAction extends Action
{
    public function process()
    {
        \Log::info($this->data());
    }
}
