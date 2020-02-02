<?php

use Illuminate\Support\Facades\Route;

Route::view('/{any}', 'index')->where('any', '.*');
