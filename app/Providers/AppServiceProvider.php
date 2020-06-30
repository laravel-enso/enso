<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\ServiceProvider;
use LaravelEnso\Core\Models\User as BaseUser;

class AppServiceProvider extends ServiceProvider
{
    public $bindings = [
        BaseUser::class => User::class
    ];

    public function boot()
    {
    }

    public function register()
    {
    }
}
