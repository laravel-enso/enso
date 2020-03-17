<?php

use LaravelEnso\Migrator\App\Database\Migration;

class CreateStructureForDashboard extends Migration
{
    protected $permissions = [
        ['name' => 'dashboard.index', 'description' => 'Dashboard page', 'is_default' => true],
    ];

    protected $menu = [
        'name' => 'Dashboard', 'icon' => 'tachometer-alt', 'route' => 'dashboard.index', 'order_index' => 100, 'has_children' => false,
    ];
}
