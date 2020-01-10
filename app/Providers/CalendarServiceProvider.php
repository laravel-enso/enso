<?php

namespace App\Providers;

use LaravelEnso\Calendar\App\Calendars\BirthdayCalendar;
use LaravelEnso\Calendar\App\Facades\Calendars;
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
