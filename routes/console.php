<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

if (! App::runningUnitTests()) {
    Schedule::command('queue:prune-failed', ['--hours' => 7 * 24])->weekly();
    Schedule::command('horizon:snapshot')->everyFiveMinutes();
}
