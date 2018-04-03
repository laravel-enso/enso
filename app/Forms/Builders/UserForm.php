<?php

namespace App\Forms\Builders;

use App\User;
use LaravelEnso\FormBuilder\app\Classes\Form;

class UserForm
{
    private const TemplatePath = __DIR__.'/../Templates/user.json';

    private $form;

    public function __construct()
    {
        $this->form = new Form(self::TemplatePath);
    }

    public function create()
    {
        return $this->form->create();
    }

    public function edit(User $user)
    {
        return $this->form->edit($user);
    }
}
