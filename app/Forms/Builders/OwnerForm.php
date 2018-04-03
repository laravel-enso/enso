<?php

namespace App\Forms\Builders;

use App\Owner;
use LaravelEnso\RoleManager\app\Models\Role;
use LaravelEnso\FormBuilder\app\Classes\Form;

class OwnerForm
{
    private const TemplatePath = __DIR__.'/../Templates/owner.json';

    private $form;

    public function __construct()
    {
        $this->form = new Form(self::TemplatePath);
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
}
