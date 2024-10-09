<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use LaravelEnso\Sentry\Exceptions\Handler;

$globalMiddlaware = [
    \LaravelEnso\Core\Http\Middleware\AuthorizationCookie::class,
    \Illuminate\Http\Middleware\TrustProxies::class,
    \Illuminate\Http\Middleware\HandleCors::class,
    \Illuminate\Foundation\Http\Middleware\PreventRequestsDuringMaintenance::class,
    \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
    \Illuminate\Foundation\Http\Middleware\TrimStrings::class,
    \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
];

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
    )
    ->withMiddleware(fn (Middleware $middleware) => $middleware
        ->use($globalMiddlaware)
        ->prependToGroup('api', [
            \LaravelEnso\Core\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        ])
        ->appendToGroup('wev', [
            \LaravelEnso\ControlPanelApi\Http\Middleware\RequestMonitor::class,
        ])
        ->priority([
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \Illuminate\Auth\Middleware\Authenticate::class,
            \Illuminate\Routing\Middleware\ThrottleRequests::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
            \Illuminate\Auth\Middleware\Authorize::class,
            \LaravelEnso\ControlPanelApi\Http\Middleware\RequestMonitor::class,
        ]))
    // ->withExceptions(fn (Exceptions $exceptions) => $exceptions
    //     ->reportable(static fn (Throwable $exception) => Handler::report($exception)))
    ->create();
