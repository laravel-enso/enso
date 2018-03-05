<?php

namespace App\Forms\Builders;

use App\User;
use LaravelEnso\FormBuilder\app\Classes\Form;

class UserForm
{
    private const FormPath = __DIR__.'/../Templates/user.json';

    private $form;

    public function __construct()
    {
        $this->form = new Form($this->formPath());
    }

    public function create()
    {
        return $this->form->create();
    }

    public function edit(User $user)
    {
        return $this->form->edit($user);
    }

    private function formPath()
    {
        $publishedForm = app_path('Forms/vendor/user.json');

        return \File::exists($publishedForm)
            ? $publishedForm
            : self::FormPath;
    }
}
