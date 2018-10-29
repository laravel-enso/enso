<?php

namespace App;

use LaravelEnso\Discussions\app\Traits\Replies;
use LaravelEnso\Core\app\Models\User as EnsoUser;
use LaravelEnso\Discussions\app\Traits\Discussions;
use LaravelEnso\CommentsManager\app\Traits\Comments;
use LaravelEnso\AddressesManager\app\Traits\Addresses;
use LaravelEnso\DocumentsManager\app\Traits\Documents;

class User extends EnsoUser
{
    use Addresses, Comments, Discussions, Replies, Documents;
}
