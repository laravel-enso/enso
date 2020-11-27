<?php

use App\Http\Controllers\Dashboard\ChartController;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Route;

// example data for the dashboard
Route::middleware(['web', 'auth'])
    ->namespace('Dashboard')
    ->prefix('dashboard')->as('dashboard.')
    ->group(function () {
        Route::get('line', [ChartController::class, 'line'])
            ->name('line');
        Route::get('bar', [ChartController::class, 'bar'])
            ->name('bar');
        Route::get('pie', [ChartController::class, 'pie'])
            ->name('pie');
        Route::get('doughnut', [ChartController::class, 'doughnut'])
            ->name('doughnut');
        Route::get('radar', [ChartController::class, 'radar'])
            ->name('radar');
        Route::get('polar', [ChartController::class, 'polar'])
            ->name('polar');
        Route::get('bubble', [ChartController::class, 'bubble'])
            ->name('bubble');
    });

Route::middleware(['auth', 'core'])
    ->group(function () {
        // add your local routes
    });

Broadcast::routes(['middleware' => ['auth:sanctum']]);
