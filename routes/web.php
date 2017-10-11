<?php

Auth::routes();

Route::middleware(['auth', 'set-language'])
    ->prefix('dashboard')->as('dashboard.')
    ->group(function () {
        Route::get('getLineChartData', 'DashboardController@getLineChartData')
        ->name('getLineChartData');
        Route::get('getBarChartData', 'DashboardController@getBarChartData')
        ->name('getBarChartData');
        Route::get('getPieChartData', 'DashboardController@getPieChartData')
        ->name('getPieChartData');
        Route::get('getRadarChartData', 'DashboardController@getRadarChartData')
        ->name('getRadarChartData');
        Route::get('getPolarChartData', 'DashboardController@getPolarChartData')
        ->name('getPolarChartData');
        Route::get('getBubbleChartData', 'DashboardController@getBubbleChartData')
        ->name('getBubbleChartData');
    });

Route::middleware(['auth', 'core'])
    ->group(function () {
        Route::get('/', '\LaravelEnso\Core\app\Http\Controllers\HomeController')
        ->name('home');
        Route::get('dashboard', 'DashboardController@index')
        ->name('dashboard');
    });
