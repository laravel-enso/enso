<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\App;

class Kernel extends ConsoleKernel
{
    protected $commands = [];

    private Schedule $schedule;

    protected function schedule(Schedule $schedule)
    {
        if (App::runningUnitTests()) {
            return;
        }

        $this->schedule = $schedule;

        $this->pruneFailedJobs()
            ->horizonSnapshot();

        if (App::isProduction()) {
            //
        }
    }

    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }

    private function pruneFailedJobs(): self
    {
        $this->schedule->command('queue:prune-failed', ['--hours' => 7 * 24])
            ->weekly();

        return $this;
    }

    private function horizonSnapshot(): void
    {
        $this->schedule->command('horizon:snapshot')
            ->everyFiveMinutes();
    }
}
