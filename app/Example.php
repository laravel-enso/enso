<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Example extends Model
{
    protected $casts = ['is_active' => 'boolean'];
}
