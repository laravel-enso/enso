<?php

namespace App\DynamicRelations\Company;

use Closure;
use LaravelEnso\Companies\Models\Company;
use LaravelEnso\Documents\Models\Document;
use LaravelEnso\DynamicMethods\Contracts\Method;

class Documents implements Method
{
    public function bindTo(): array
    {
        return [Company::class];
    }

    public function name(): string
    {
        return 'documents';
    }

    public function closure(): Closure
    {
        return fn (Company $company) => $company->morphMany(Document::class, 'documentable');
    }
}
