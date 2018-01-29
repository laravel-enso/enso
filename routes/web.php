<?php

Route::namespace('Examples')
    ->prefix('examples')->as('examples.')
    ->group(function () {
        Route::view('table', 'examples.table')->name('table');

        Route::resource('table', 'TableController', ['only' => ['create', 'edit', 'destroy']]);

        Route::prefix('table')->as('table.')
            ->group(function () {
                Route::get('init', 'TableController@init')->name('init');
                Route::get('data', 'TableController@data')->name('data');
                Route::get('exportExcel', 'TableController@exportExcel')->name('exportExcel');
            });
    });

Route::get('{any}', function () {
    return view('laravel-enso/core::index');
})->where('any', '.*');
