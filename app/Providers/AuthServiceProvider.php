<?php

namespace App\Providers;

use App\User;
use Laravel\Horizon\Horizon;
use App\Policies\UserPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [
        User::class => UserPolicy::class,
    ];

    public function boot()
    {
        $this->registerPolicies();

        Horizon::auth(function ($request) {
            return auth()->check() && $request->user()->isAdmin();
        });
    }
}
