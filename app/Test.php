<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use LaravelEnso\Versioning\app\Traits\Versioning;

class Test extends Model
{
    use Versioning;

    protected $fillable = ['name'];
}
