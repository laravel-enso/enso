<?php

namespace App\Dynamics\Company;

use Closure;
use LaravelEnso\Companies\Models\Company;
use LaravelEnso\Documents\Models\Document;
use LaravelEnso\DynamicMethods\Contracts\Relation;

class Documents implements Relation
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
