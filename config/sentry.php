<?php

return [
    'dsn' => env('SENTRY_LARAVEL_DSN'),
    'send_default_pii' => true,
    'environment' => env('APP_ENV'),
];
