<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use LaravelEnso\MenuManager\app\Models\Menu;

class FontAwesomeUpgrade extends Command
{
    protected $signature = 'enso:fa-upgrade';

    protected $description = 'Converts all the fa4 icons to fa5';

    public function handle()
    {
        Menu::each(function ($menu) {
            $menu->icon = str_replace('fa fa-fw fa-', '', $menu->icon);
            $menu->icon = str_replace('fas fa-fw fa-', '', $menu->icon);
            $menu->save();
        });
    }
}
