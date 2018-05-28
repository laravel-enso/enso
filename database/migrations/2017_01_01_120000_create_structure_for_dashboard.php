<?php

use LaravelEnso\StructureManager\app\Classes\StructureMigration;

class CreateStructureForDashboard extends StructureMigration
{
    protected $permissionGroup = [
        'name' => 'dashboard', 'description' => 'Dashboard permissions group',
    ];

    protected $permissions = [
        ['name' => 'dashboard.index', 'description' => 'Dashboard page', 'type' => 0, 'is_default' => true],
    ];

    protected $menu = [
        'name' => 'Dashboard', 'icon' => 'tachometer-alt', 'link' => 'dashboard.index', 'order_index' => 999, 'has_children' => false,
    ];
}
