<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Support\Facades\App;
use LaravelEnso\Core\Exceptions\Sentry;
use LaravelEnso\Helpers\Exceptions\EnsoException;
use Throwable;

class Handler extends ExceptionHandler
{
    protected $dontReport = [
        EnsoException::class,
    ];

    protected $dontFlash = [
        'password', 'password_confirmation',
    ];

    public function report(Throwable $exception)
    {
        if (App::bound('sentry') && $this->shouldReport($exception)) {
            Sentry::report($exception);
        }

        parent::report($exception);
    }
}
