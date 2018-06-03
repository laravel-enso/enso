<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use LaravelEnso\Versioning\app\Traits\Versionable;

class Test extends Model
{
    use Versionable;

    // protected $versioningAttribute = 'versionnn';

    protected $fillable = ['name'];
}
