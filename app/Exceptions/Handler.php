<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use LaravelEnso\Helpers\App\Exceptions\EnsoException;

class Handler extends ExceptionHandler
{
    protected $dontReport = [
        EnsoException::class,
    ];

    protected $dontFlash = [
        'password', 'password_confirmation',
    ];

    public function report(Exception $exception)
    {
        if (app()->bound('sentry') && $this->shouldReport($exception)) {
            app('sentry')->captureException($exception);
        }

        parent::report($exception);
    }
}
