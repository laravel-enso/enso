<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;

class ResetPasswordController extends Controller
{
    use ResetsPasswords;

    protected $redirectTo = '/';

    public function __construct()
    {
        $this->middleware('guest');
    }

    protected function sendResetResponse($response)
    {
        return ['status' => trans($response)];
    }

    protected function sendResetFailedResponse(Request $request, $response)
    {
        throw new UnprocessableEntityHttpException(trans($response));
    }
}
