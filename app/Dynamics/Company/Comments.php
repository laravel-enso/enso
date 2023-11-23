<?php

namespace App\DynamicRelations\Company;

use Closure;
use LaravelEnso\Comments\Models\Comment;
use LaravelEnso\Companies\Models\Company;
use LaravelEnso\DynamicMethods\Contracts\Method;

class Comments implements Method
{
    public function bindTo(): array
    {
        return [Company::class];
    }

    public function name(): string
    {
        return 'comments';
    }

    public function closure(): Closure
    {
        return fn (Company $company) => $company->morphMany(Comment::class, 'commentable');
    }
}
