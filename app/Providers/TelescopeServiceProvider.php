<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Laravel\Telescope\IncomingEntry;
use Laravel\Telescope\Telescope;
use Laravel\Telescope\TelescopeApplicationServiceProvider;

class TelescopeServiceProvider extends TelescopeApplicationServiceProvider
{
    public function register()
    {
        Telescope::night();

        $this->hideSensitiveRequestDetails();

        Telescope::filter(fn (IncomingEntry $entry) => $this->app->isLocal()
            || $entry->isReportableException()
            || $entry->isFailedJob()
            || $entry->isScheduledTask()
            || $entry->hasMonitoredTag());
    }

    protected function hideSensitiveRequestDetails()
    {
        if (! $this->app->isLocal()) {
            Telescope::hideRequestParameters(['_token']);
            Telescope::hideRequestHeaders(['cookie', 'x-csrf-token', 'x-xsrf-token']);
        }
    }

    protected function gate()
    {
        Gate::define('viewTelescope', fn ($user) => $user?->isAdmin());
    }
}
