<?php

return [
    'maxLoginAttempts' => env('LOGIN_ATTEMPTS_PER_MINUTE', 60),
    'password' => [
        'lifetime' => env('PASSWORD_LIFETIME', 0),
        'minLength' => env('PASSWORD_LENGTH', 6),
        'minUpperCase' => env('PASSWORD_UPPER_CASE_CHARACTERS', 2),
        'minNumeric' => env('PASSWORD_NUMERIC_CHARACTERS', 0),
        'minSpecial' => env('PASSWORD_SPECIAL_CHARACTERS', 0),
    ],
];
