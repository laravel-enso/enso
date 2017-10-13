<?php


Auth::routes();

Route::get('/getAppName', function () {
    return config('app.name');
})->name('getAppName');

Route::middleware(['auth'])
    ->prefix('dashboard')->as('dashboard.')
    ->group(function () {
        Route::get('', 'DashboardController@index')
        ->name('index')
        ->middleware('core');
        Route::get('getLineChartData', 'DashboardController@getLineChartData')
        ->name('getLineChartData');
        Route::get('getBarChartData', 'DashboardController@getBarChartData')
        ->name('getBarChartData');
        Route::get('getPieChartData', 'DashboardController@getPieChartData')
        ->name('getPieChartData');
        Route::get('getDoughnutChartData', 'DashboardController@getDoughnutChartData')
        ->name('getDoughnutChartData');
        Route::get('getRadarChartData', 'DashboardController@getRadarChartData')
        ->name('getRadarChartData');
        Route::get('getPolarChartData', 'DashboardController@getPolarChartData')
        ->name('getPolarChartData');
        Route::get('getBubbleChartData', 'DashboardController@getBubbleChartData')
        ->name('getBubbleChartData');
    });
