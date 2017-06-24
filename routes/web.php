<?php

Auth::routes();

Route::group([
    'middleware' => ['auth', 'action-logger'],
    'prefix'     => 'dashboard',
    'as'         => 'dashboard.',
], function () {
    Route::get('getLineChartData', 'DashboardController@getLineChartData')->name('getLineChartData');
    Route::get('getBarChartData', 'DashboardController@getBarChartData')->name('getBarChartData');
    Route::get('getPieChartData', 'DashboardController@getPieChartData')->name('getPieChartData');
    Route::get('getRadarChartData', 'DashboardController@getRadarChartData')->name('getRadarChartData');
    Route::get('getPolarChartData', 'DashboardController@getPolarChartData')->name('getPolarChartData');
    Route::get('getBubbleChartData', 'DashboardController@getBubbleChartData')->name('getBubbleChartData');
});

Route::group(['middleware' => ['auth', 'core']], function () {
    Route::get('/', '\LaravelEnso\Core\app\Http\Controllers\HomeController')->name('home');
    Route::get('dashboard', 'DashboardController@index')->name('dashboard');
});
