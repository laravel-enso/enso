<?php

Route::view('/{any}', 'laravel-enso/core::index')
    ->where('any', '.*');
