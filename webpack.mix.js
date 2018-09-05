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

// .sass('resources/sass/themes/cerulean.scss', 'public/themes/cerulean/bulma.min.css')
// .sass('resources/sass/themes/clean.scss', 'public/themes/clean/bulma.min.css')
// .sass('resources/sass/themes/cosmo.scss', 'public/themes/cosmo/bulma.min.css')
// .sass('resources/sass/themes/cyborg.scss', 'public/themes/cyborg/bulma.min.css')
// .sass('resources/sass/themes/darkly.scss', 'public/themes/darkly/bulma.min.css')
// .sass('resources/sass/themes/flatly.scss', 'public/themes/flatly/bulma.min.css')
// .sass('resources/sass/themes/journal.scss', 'public/themes/journal/bulma.min.css')
// .sass('resources/sass/themes/litera.scss', 'public/themes/litera/bulma.min.css')
// .sass('resources/sass/themes/lumen.scss', 'public/themes/lumen/bulma.min.css')
// .sass('resources/sass/themes/lux.scss', 'public/themes/lux/bulma.min.css')
// .sass('resources/sass/themes/materia.scss', 'public/themes/materia/bulma.min.css')
// .sass('resources/sass/themes/minty.scss', 'public/themes/minty/bulma.min.css')
// .sass('resources/sass/themes/pulse.scss', 'public/themes/pulse/bulma.min.css')
// .sass('resources/sass/themes/sandstone.scss', 'public/themes/sandstone/bulma.min.css')
// .sass('resources/sass/themes/simplex.scss', 'public/themes/simplex/bulma.min.css')
// .sass('resources/sass/themes/slate.scss', 'public/themes/slate/bulma.min.css')
// .sass('resources/sass/themes/solar.scss', 'public/themes/solar/bulma.min.css')
// .sass('resources/sass/themes/spacelab.scss', 'public/themes/spacelab/bulma.min.css')
// .sass('resources/sass/themes/superhero.scss', 'public/themes/superhero/bulma.min.css')
// .sass('resources/sass/themes/united.scss', 'public/themes/united/bulma.min.css')
// .sass('resources/sass/themes/yeti.scss', 'public/themes/yeti/bulma.min.css');

if (process.env.NODE_ENV === 'production') {
    mix.version();
}
