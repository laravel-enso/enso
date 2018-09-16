<?php

Route::middleware(['auth'])
    ->prefix('dashboard')->as('dashboard.')
    ->group(function () {
        Route::get('line', 'ChartController@line')
            ->name('line');
        Route::get('bar', 'ChartController@bar')
            ->name('bar');
        Route::get('pie', 'ChartController@pie')
            ->name('pie');
        Route::get('doughnut', 'ChartController@doughnut')
            ->name('doughnut');
        Route::get('radar', 'ChartController@radar')
            ->name('radar');
        Route::get('polar', 'ChartController@polar')
            ->name('polar');
        Route::get('bubble', 'ChartController@bubble')
            ->name('bubble');
    });
