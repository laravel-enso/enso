<?php

namespace App;

use LaravelEnso\Comments\app\Traits\Comments;
use LaravelEnso\Addresses\app\Traits\Addresses;
use LaravelEnso\Discussions\app\Traits\Replies;
use LaravelEnso\Documents\app\Traits\Documents;
use LaravelEnso\Core\app\Models\User as EnsoUser;
use LaravelEnso\Discussions\app\Traits\Discussions;

class User extends EnsoUser
{
    use Addresses, Comments, Discussions, Replies, Documents;
}
