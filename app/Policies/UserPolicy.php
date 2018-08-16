<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function handle(User $user, User $targetUser)
    {
        return $user->isAdmin() || !$targetUser->isAdmin();
    }

    public function changePassword(User $user, User $targetUser)
    {
        return $user->id === $targetUser->id;
    }
}
