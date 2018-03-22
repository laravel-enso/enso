<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function before($user, $ability)
    {
        if ($user->isAdmin()) {
            return true;
        }
    }

    public function update(User $user, User $targetUser)
    {
        return !$targetUser->isAdmin();
    }

    public function destroy(User $user, User $targetUser)
    {
        return !$targetUser->isAdmin();
    }
}
