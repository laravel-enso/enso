<?php

namespace App\DynamicRelations\Company;

use Closure;
use LaravelEnso\Companies\Models\Company;
use LaravelEnso\Discussions\Models\Discussion;
use LaravelEnso\DynamicMethods\Contracts\Relation;


class Discussions implements Relation
{
    public function bindTo(): array
    {
        return [Company::class];
    }

    public function name(): string
    {
        return 'discussions';
    }

    public function closure(): Closure
    {
        return fn (Company $company) => $company->morphMany(Discussion::class, 'discussable');
    }
}
