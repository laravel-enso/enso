<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use LaravelEnso\CommentsManager\app\Traits\Comments;
use LaravelEnso\Core\app\Models\User as Users;
use LaravelEnso\DocumentsManager\app\Traits\Documents;

class User extends Users
{
    use Comments, Documents, Notifiable;

    protected $hidden = ['password', 'remember_token'];

    protected $fillable = ['first_name', 'last_name', 'phone', 'is_active', 'role_id'];

    protected $appends = ['fullName'];

    public function owner()
    {
        return $this->belongsTo('App\Owner');
    }
}
