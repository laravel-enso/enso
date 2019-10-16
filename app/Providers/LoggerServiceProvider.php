<?php

namespace App\Providers;

use Illuminate\Support\Facades\App;
use LaravelEnso\Core\app\Models\User;
use LaravelEnso\Roles\app\Models\Role;
use LaravelEnso\Teams\app\Models\Team;
use LaravelEnso\ActivityLog\app\Enums\Events;
use LaravelEnso\ActivityLog\app\Facades\Logger;
use LaravelEnso\ActivityLog\LoggerServiceProvider as ServiceProvider;

class LoggerServiceProvider extends ServiceProvider
{
    public $register = [
        Team::class => [
            'label' => 'name',
            'attributes' => ['name'],
            'events' => [Events::Created, Events::Updated, Events::Deleted],
        ],
        User::class => [
            'label' => 'person.name',
            'attributes' => ['role_id' => [Role::class => 'name']],
            'events' => [Events::Created, Events::Deleted, Events::UpdatedActiveState],
        ],
    ];

    public function boot()
    {
        parent::boot();

        if (!App::environment('testing')) {
            Logger::observe();
        }
    }
}
