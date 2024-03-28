<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\ServiceProvider;
use LaravelEnso\Users\Models\User as BaseUser;

class AppServiceProvider extends ServiceProvider
{
    public $bindings = [
        BaseUser::class => User::class,
    ];

    public function boot(): void
    {
    }

    public function register(): void
    {
    }
}
