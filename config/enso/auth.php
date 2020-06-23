<?php

return [
    'maxLoginAttempts' => (int) env('LOGIN_ATTEMPTS_PER_MINUTE', 5),
    'password' => [
        'lifetime' => (int) env('PASSWORD_LIFETIME', 0),
        'minLength' => (int) env('PASSWORD_LENGTH', 6),
        'minUpperCase' => (int) env('PASSWORD_UPPER_CASE_CHARACTERS', 0),
        'minNumeric' => (int) env('PASSWORD_NUMERIC_CHARACTERS', 0),
        'minSpecial' => (int) env('PASSWORD_SPECIAL_CHARACTERS', 0),
    ],
];
