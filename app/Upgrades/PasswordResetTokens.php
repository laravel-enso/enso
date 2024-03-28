<?php

namespace App\Upgrades;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use LaravelEnso\Upgrade\Contracts\BeforeMigration;
use LaravelEnso\Upgrade\Contracts\MigratesData;
use LaravelEnso\Upgrade\Contracts\MigratesTable;

class PasswordResetTokens implements MigratesTable, MigratesData, BeforeMigration
{
    public function isMigrated(): bool
    {
        return Schema::hasTable('password_reset_tokens', 'expires_at');
    }

    public function migrateTable(): void
    {
        Schema::rename('password_resets', 'password_reset_tokens');
    }

    public function migrateData(): void
    {
        DB::table('migrations')
            ->whereMigration('2014_10_12_100000_create_password_resets_table')
            ->update([
                'migration' => '2014_10_12_100000_create_password_reset_tokens_table',
            ]);
    }
}
