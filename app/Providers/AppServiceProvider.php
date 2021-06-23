<?php

namespace App\Providers;

use App\DynamicRelations\Company\Comments;
use App\DynamicRelations\Company\Discussions;
use App\DynamicRelations\Company\Documents;
use App\Models\User;
use Illuminate\Support\ServiceProvider;
use LaravelEnso\Companies\Models\Company;
use LaravelEnso\DynamicMethods\Services\Methods;
use LaravelEnso\Users\Models\User as BaseUser;

class AppServiceProvider extends ServiceProvider
{
    public $bindings = [
        BaseUser::class => User::class,
    ];

    public function boot()
    {
    }

    public function register()
    {
        Methods::bind(Company::class, [Comments::class, Discussions::class, Documents::class]);
    }
}
