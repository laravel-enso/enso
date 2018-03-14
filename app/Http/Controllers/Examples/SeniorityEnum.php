<?php

//please ignore the namespace ;)

namespace App\Http\Controllers\Examples;

use LaravelEnso\Helpers\app\Classes\Enum;

class SeniorityEnum extends Enum
{
    protected static $data = [
        1 => 'Assistant',
        2 => 'Associate',
        3 => 'Staff',
        4 => 'Senior',
        5 => 'Partner',
    ];
}
