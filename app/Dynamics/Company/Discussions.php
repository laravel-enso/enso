<?php

namespace App\DynamicRelations\Company;

use Closure;
use LaravelEnso\Companies\Models\Company;
use LaravelEnso\Discussions\Models\Discussion;
use LaravelEnso\DynamicMethods\Contracts\Method;

class Discussions implements Method
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
