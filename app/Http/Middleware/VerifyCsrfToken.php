<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;

class VerifyCsrfToken extends BaseVerifier
{
    protected $addHttpCookie = true;

    protected $except = [
        'api/login', 'api/password/email', 'api/password/reset'
    ];
}
