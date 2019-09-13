<?php

namespace App;

use LaravelEnso\Comments\app\Traits\Comments;
use LaravelEnso\Discussions\app\Traits\Replies;
use LaravelEnso\Core\app\Models\User as CoreUser;
use LaravelEnso\Discussions\app\Traits\Discussions;

class User extends CoreUser
{
    use Comments, Discussions, Replies;
}
