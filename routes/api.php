<?php

Route::namespace('Auth')
    ->group(function () {
        Route::post('login', 'LoginController@login')
            ->name('login');
        Route::post('logout', 'LoginController@logout')
            ->name('logout');
        Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail')
            ->name('password.email');
        Route::post('password/reset', 'ResetPasswordController@reset')
            ->name('password.reset');
    });

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

Route::middleware(['auth', 'core'])
    ->group(function () {
        Route::namespace('Administration')
            ->prefix('administration')->as('administration.')
            ->group(function () {
                Route::namespace('Owner')
                    ->prefix('owners')->as('owners.')
                    ->group(function () {
                        Route::get('initTable', 'OwnerTableController@init')
                            ->name('initTable');
                        Route::get('getTableData', 'OwnerTableController@data')
                            ->name('getTableData');
                        Route::get('exportExcel', 'OwnerTableController@excel')
                            ->name('exportExcel');

                        Route::get('selectOptions', 'OwnerSelectController@options')
                            ->name('selectOptions');
                    });

                Route::resource('owners', 'Owner\OwnerController', ['except' => ['show']]);

                Route::namespace('User')
                    ->prefix('users')->as('users.')
                    ->group(function () {
                        Route::get('initTable', 'UserTableController@init')
                            ->name('initTable');
                        Route::get('getTableData', 'UserTableController@data')
                            ->name('getTableData');
                        Route::get('exportExcel', 'UserTableController@excel')
                            ->name('exportExcel');
                        Route::get('selectOptions', 'UserSelectController@options')
                            ->name('selectOptions');
                    });

                Route::resource('users', 'User\UserController');
            });
    });
