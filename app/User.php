<?php

namespace App;

use LaravelEnso\Comments\app\Traits\Comments;
use LaravelEnso\Core\app\Models\User as CoreUser;
use LaravelEnso\Discussions\app\Traits\Discussions;
use LaravelEnso\Discussions\app\Traits\Replies;

class User extends CoreUser
{
    use Comments, Discussions, Replies;
}
