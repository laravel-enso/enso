<?php

namespace App;

use LaravelEnso\Core\app\Models\User as Users;
use LaravelEnso\CommentsManager\app\Traits\Comments;
use LaravelEnso\DocumentsManager\app\Traits\Documents;

class User extends Users
{
    use Comments, Documents;

    protected $hidden = ['password', 'remember_token'];

    protected $fillable = ['first_name', 'last_name', 'phone', 'is_active', 'email', 'owner_id', 'role_id'];

    protected $attributes = ['is_active' => false];

    protected $appends = ['fullName'];

    protected $casts = ['is_active' => 'boolean'];

    public function owner()
    {
        return $this->belongsTo(config('enso.config.ownerModel'));
    }
}
