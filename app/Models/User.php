<?php

namespace App\Models;

use LaravelEnso\Comments\App\Traits\Comments;
use LaravelEnso\Core\App\Models\User as CoreUser;
use LaravelEnso\Discussions\App\Traits\Discussions;
use LaravelEnso\Discussions\App\Traits\Replies;

class User extends CoreUser
{
    use Comments, Discussions, Replies;
}
