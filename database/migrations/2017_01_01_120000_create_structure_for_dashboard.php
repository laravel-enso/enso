<?php

use LaravelEnso\Migrator\Database\Migration;

class CreateStructureForDashboard extends Migration
{
    protected array $permissions = [
        ['name' => 'dashboard.index', 'description' => 'Dashboard page', 'is_default' => true],
    ];

    protected array $menu = [
        'name' => 'Dashboard', 'icon' => 'tachometer-alt', 'route' => 'dashboard.index', 'order_index' => 100, 'has_children' => false,
    ];
}
