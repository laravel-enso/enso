<?php

namespace App\Providers;

use LaravelEnso\Calendar\Calendars\BirthdayCalendar;
use LaravelEnso\Mediator\MediatorServiceProvider;

class CalendarServiceProvider extends MediatorServiceProvider
{
    protected bool $optional = false;

    public function data(): array
    {
        return [
            BirthdayCalendar::class,
        ];
    }
}
