<?php

namespace App\Http\Controllers\Administration\User;

use App\User;
use App\Forms\Builders\UserForm;
use App\Http\Controllers\Controller;
use App\Http\Requests\ValidateUserRequest;
use LaravelEnso\Core\app\Classes\ProfileBuilder;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;

class UserController extends Controller
{
    use SendsPasswordResetEmails;

    public function create(UserForm $form)
    {
        return ['form' => $form->create()];
    }

    public function store(ValidateUserRequest $request)
    {
        $user = new User($request->all());

        $this->authorize('handle', $user);

        $user->save();

        $this->sendResetLinkEmail($request);

        return [
            'message' => __('The user was successfully created'),
            'redirect' => 'administration.users.edit',
            'id' => $user->id,
        ];
    }

    public function show(User $user)
    {
        (new ProfileBuilder($user))->set();

        return ['user' => $user];
    }

    public function edit(User $user, UserForm $form)
    {
        return ['form' => $form->edit($user)];
    }

    public function update(ValidateUserRequest $request, User $user)
    {
        $user->fill($request->all());

        $this->authorize('handle', $user);

        $user->save();

        return ['message' => __('The user was successfully updated')];
    }

    public function destroy(User $user)
    {
        $this->authorize('handle', $user);

        $user->delete();

        return [
            'message' => __('The user was successfully deleted'),
            'redirect' => 'administration.users.index',
        ];
    }
}
