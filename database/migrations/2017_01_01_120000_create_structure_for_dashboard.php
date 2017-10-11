<?php

use LaravelEnso\StructureManager\app\Classes\StructureMigration;

class CreateStructureForDashboard extends StructureMigration
{
    protected $permissionGroup = [
        'name' => 'dashboard', 'description' => 'Dashboard permissions group',
    ];

    protected $permissions = [
        ['name' => 'dashboard', 'description' => 'Dashboard page', 'type' => 0, 'default' => true],
    ];

    protected $menu = [
        'name' => 'Dashboard', 'icon' => 'fa fa-fw fa-tachometer', 'link' => 'dashboard', 'has_children' => false,
    ];
}
