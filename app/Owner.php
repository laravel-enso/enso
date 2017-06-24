<?php

namespace App;

use LaravelEnso\Core\app\Models\Owner as Owners;

class Owner extends Owners
{
    protected $fillable = [ 'name', 'is_active' ];

    public function users()
    {
        return $this->hasMany('App\User');
    }
}
