<?php

namespace App\Forms\Builders;

use App\Owner;
use LaravelEnso\RoleManager\app\Models\Role;
use LaravelEnso\FormBuilder\app\Classes\Form;

class OwnerForm
{
    private const FormPath = __DIR__.'/../Templates/owner.json';

    private $form;

    public function __construct()
    {
        $this->form = new Form($this->formPath());
    }

    public function create()
    {
        return $this->form
            ->options('roleList', Role::get(['name', 'id']))
            ->create();
    }

    public function edit(Owner $owner)
    {
        $owner->append(['roleList']);

        return $this->form
            ->options('roleList', Role::get(['name', 'id']))
            ->append('owner_id', $owner->id)
            ->edit($owner);
    }

    private function formPath()
    {
        $publishedForm = app_path('Forms/vendor/owner.json');

        return \File::exists($publishedForm)
            ? $publishedForm
            : self::FormPath;
    }
}
