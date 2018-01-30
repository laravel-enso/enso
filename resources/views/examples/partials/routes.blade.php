<pre class="is-paddingless"
    v-hljs>
    <code class="php">
Route::namespace('Examples')
    ->prefix('examples')->as('examples.')
    ->group(function () {
        Route::view('table', 'examples.table')->name('table');

        Route::prefix('table')->as('table.')
            ->group(function () {
                Route::get('init', 'TableController@init')
                    ->name('init');
                Route::get('data', 'TableController@data')
                    ->name('data');
            });
    });
        </code>
    </pre>