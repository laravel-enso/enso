<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Row limit per sheet
    |--------------------------------------------------------------------------
    |
    | Sets the default row limit per sheet used for excel exports.
    |
     */

    'rowLimit' => env('EXPORT_ROW_LIMIT', 1000000),

    /*
    |--------------------------------------------------------------------------
    | Chunk
    |--------------------------------------------------------------------------
    |
    | Sets the default chunk when processing excel exports.
    |
     */

    'chunk' => env('EXPORT_CHUNK', 25000),

    /*
    |--------------------------------------------------------------------------
    | Retain exports for a number of days
    |--------------------------------------------------------------------------
    | Sets the default period in days for retaining exports. Must be used
    | together with the Purge command.
    |
     */

    'retainFor' => env('EXPORT_RETAIN_FOR', 60),
];
