const { mix } = require('laravel-mix');

mix
    .options({
        hmrOptions: {
            port: '3030',
        },
    })
    .copyDirectory('resources/images', 'public/images')

    .js('resources/js/tableExample.js', 'public/js')
    .js('resources/js/selectExample.js', 'public/js')
    .js('resources/js/enso.js', 'public/js')
    .sourceMaps()

    .sass('resources/sass/enso.scss', 'public/css');

// .sass('resources/sass/themes/light.scss', 'public/themes/light/bulma.min.css')
// .sass('resources/sass/themes/dark.scss', 'public/themes/dark/bulma.min.css');

if (process.env.NODE_ENV === 'production') {
    mix.version();
}
