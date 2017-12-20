<?php

namespace App;

use LaravelEnso\Core\app\Models\User as Users;
use LaravelEnso\CommentsManager\app\Traits\Comments;
use LaravelEnso\DocumentsManager\app\Traits\Documents;

class User extends Users
{
    use Comments, Documents;

    protected $hidden = ['password', 'remember_token'];

    protected $fillable = ['first_name', 'last_name', 'phone', 'is_active'];

    protected $casts = ['is_active' => 'boolean'];

    protected $appends = ['fullName'];

    public function owner()
    {
        return $this->belongsTo('App\Owner');
    }
}
