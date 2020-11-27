<?php

namespace App\Providers;

use LaravelEnso\Calendar\Calendars\BirthdayCalendar;
use LaravelEnso\Calendar\CalendarServiceProvider as ServiceProvider;
use LaravelEnso\Calendar\Facades\Calendars;

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
