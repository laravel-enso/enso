<?php

namespace App;

use LaravelEnso\Core\app\Models\User as Users;

class User extends Users
{
    protected $hidden = ['password', 'remember_token'];

    protected $fillable = ['first_name', 'last_name', 'phone', 'is_active', 'role_id'];

    protected $appends = ['full_name'];

    public function owner()
    {
        return $this->belongsTo('App\Owner');
    }
}
