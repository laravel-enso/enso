<?php

Route::get('{any}', function () {
    return view('laravel-enso/core::index');
})->where('any', '.*');
