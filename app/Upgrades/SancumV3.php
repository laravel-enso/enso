<?php

namespace App\Upgrades;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use LaravelEnso\Upgrade\Contracts\MigratesTable;

class SancumV3 implements MigratesTable
{
    public function isMigrated(): bool
    {
        return Schema::hasColumn('personal_access_tokens', 'expires_at');
    }

    public function migrateTable(): void
    {
        Schema::table('personal_access_tokens', function (Blueprint $table) {
            $table->timestamp('expires_at')->nullable()->after('last_used_at');
        });
    }
}
