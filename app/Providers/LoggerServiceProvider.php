<?php

namespace App\Providers;

use Illuminate\Support\Facades\App;
use LaravelEnso\ActivityLog\Enums\Events;
use LaravelEnso\ActivityLog\Facades\Logger;
use LaravelEnso\ActivityLog\LoggerServiceProvider as ServiceProvider;
use LaravelEnso\Core\Models\User;
use LaravelEnso\Roles\Models\Role;
use LaravelEnso\Teams\Models\Team;

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
            'events' => [Events::UpdatedActiveState],
        ],
    ];

    public function boot()
    {
        parent::boot();

        if (! App::runningUnitTests()) {
            Logger::observe();
        }
    }
}
