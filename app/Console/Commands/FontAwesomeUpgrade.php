<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use LaravelEnso\MenuManager\app\Models\Menu;

class FontAwesomeUpgrade extends Command
{
    protected $signature = 'enso:fa-upgrade';

    protected $description = 'Converts all the fa4 icons to fa5';

    protected $menuIcons = [
        'fa fa-fw fa-tachometer' => 'fas fa-fw fa-tachometer-alt',
        'fa fa-fw fa-cogs' => 'fas fa-fw fa-cogs',
        'fa fa-fw fa-list-alt' => 'fas fa-fw fa-list-alt',
        'fa fa-fw fa-users' => 'fas fa-fw fa-users',
        'fa fa-fw fa-address-book-o' => 'fas fa-fw fa-address-book',
        'fa fa-fw fa-sliders' => 'fas fa-fw fa-sliders-h',
        'fa fa-fw fa-object-group' => 'fas fa-fw fa-object-group',
        'fa fa-fw fa-exclamation-triangle' => 'fas fa-fw fa-exclamation-triangle',
        'fa fa-fw fa-list' => 'fas fa-fw fa-list',
        'fa fa-fw fa-universal-access' => 'fas fa-fw fa-universal-access',
        'fa fa-fw fa-terminal' => 'fas fa-fw fa-terminal',
        'fa fa-fw fa-language' => 'fas fa-fw fa-language',
        'fa fa-fw fa-book' => 'fas fa-fw fa-book',
        'fa fa-fw fa-cloud-upload' => 'fas fa-fw fa-cloud-upload-alt',
    ];

    public function handle()
    {
        collect($this->menuIcons)->each(function ($newIcon, $oldIcon) {
            Menu::whereIcon($oldIcon)->update(['icon' => $newIcon]);
        });
    }
}
