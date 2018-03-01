<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Database\Schema\Blueprint;

class AddIsActiveColumnToLanguagesTable extends Command
{
    protected $signature = 'enso:update-localisation';

    protected $description = 'Adds `is_active` column to the `languages` table';

    public function handle()
    {
        if (\Schema::hasColumn('languages', 'is_active')) {
            $this->info('The localisation update is already done.');

            return;
        }

        \Schema::table('languages', function (Blueprint $table) {
            $this->info('Update succeded!');
            $table->boolean('is_active')->default(true)->after('flag');
        });
    }
}
