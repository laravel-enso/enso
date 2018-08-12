<?php

namespace App;

use App\Owner;
use LaravelEnso\RoleManager\app\Models\Role;
use LaravelEnso\Core\app\Models\User as Users;
use LaravelEnso\ActivityLog\app\Traits\LogActivity;
use LaravelEnso\CommentsManager\app\Traits\Comments;
use LaravelEnso\DocumentsManager\app\Traits\Documents;

class User extends Users
{
    use Comments, Documents, LogActivity;

    protected $hidden = ['password', 'remember_token'];

    protected $fillable = ['first_name', 'last_name', 'phone', 'is_active', 'email', 'owner_id', 'role_id'];

    protected $attributes = ['is_active' => false];

    protected $appends = ['fullName'];

    protected $casts = ['is_active' => 'boolean'];

    protected $loggableLabel = 'fullName';

    protected $loggable = [
        'first_name', 'last_name', 'phone', 'email', 'owner_id' => [Owner::class, 'name'],
        'role_id' => [Role::class, 'name'], 'is_active' => 'active state',
    ];

    public function owner()
    {
        return $this->belongsTo(
            config('enso.config.ownerModel')
        );
    }
}
