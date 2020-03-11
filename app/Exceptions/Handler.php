<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use LaravelEnso\Helpers\App\Exceptions\EnsoException;
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
        if (app()->bound('sentry') && $this->shouldReport($exception)) {
            app('sentry')->captureException($exception);
        }

        parent::report($exception);
    }
}
