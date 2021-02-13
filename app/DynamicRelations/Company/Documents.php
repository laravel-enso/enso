<?php

namespace App\DynamicRelations\Company;

use Closure;
use LaravelEnso\Documents\Models\Document;
use LaravelEnso\DynamicMethods\Contracts\Method;

class Documents implements Method
{
    public function name(): string
    {
        return 'documents';
    }

    public function closure(): Closure
    {
        return fn () => $this->morphMany(Document::class, 'documentable');
    }
}
