<?php

namespace App;

use LaravelEnso\Contacts\app\Traits\Contactable;
use LaravelEnso\Core\app\Models\Owner as Owners;
use LaravelEnso\ActivityLog\app\Traits\LogActivity;
use LaravelEnso\CommentsManager\app\Traits\Commentable;
use LaravelEnso\AddressesManager\app\Traits\Addressable;
use LaravelEnso\DocumentsManager\app\Traits\Documentable;

class Owner extends Owners
{
    use LogActivity, Contactable, Commentable, Documentable, Addressable;

    protected $fillable = ['name', 'description', 'is_active'];

    protected $attributes = ['is_active' => false];

    protected $casts = ['is_active' => 'boolean'];

    protected $loggableLabel = 'name';

    protected $loggable = ['name', 'description', 'is_active' => 'active state'];

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
