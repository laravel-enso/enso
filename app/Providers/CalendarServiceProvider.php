<?php

namespace App\Providers;

use LaravelEnso\Calendar\app\Facades\Calendars;
use LaravelEnso\Calendar\app\Services\Calendars\BirthdayCalendar;
use LaravelEnso\Calendar\CalendarServiceProvider as ServiceProvider;

class CalendarServiceProvider extends ServiceProvider
{
    protected $register = [
        BirthdayCalendar::class,
    ];

    public function boot()
    {
        Calendars::register($this->register);
    }
}
