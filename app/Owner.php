<?php

namespace App;

use LaravelEnso\Contacts\app\Traits\Contactable;
use LaravelEnso\Core\app\Models\Owner as Owners;
use LaravelEnso\CommentsManager\app\Traits\Commentable;
use LaravelEnso\DocumentsManager\app\Traits\Documentable;

class Owner extends Owners
{
    use Contactable, Commentable, Documentable;

    protected $fillable = ['name', 'description', 'is_active'];

    public function users()
    {
        return $this->hasMany('App\User');
    }
}
