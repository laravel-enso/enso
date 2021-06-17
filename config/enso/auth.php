<?php

return [
    'maxLoginAttempts' => (int) env('LOGIN_ATTEMPTS_PER_MINUTE', 5),
    'password' => [
        'lifetime' => env('PASSWORD_LIFETIME', 0),
        'minLength' => env('PASSWORD_MIN_LENGTH', 6),
        'mixedCase' => (bool) env('PASSWORD_MIXED_CASE', 0),
        'numeric' => (bool) env('PASSWORD_NUMERIC', 0),
        'special' => (bool) env('PASSWORD_SPECIAL', 0),
    ],
];
