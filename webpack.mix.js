const { mix } = require('laravel-mix');

mix
    .copyDirectory('resources/assets/images', 'public/images')
    .copyDirectory('node_modules/flag-icon-css/flags', 'public/fonts/vendor/flag-icon-css/flags')

    .js('resources/assets/js/enso.js', 'public/js')
    .sourceMaps()

    .sass('resources/assets/sass/enso.scss', 'public/css')

// .sass('resources/assets/sass/themes/cerulean.scss', 'public/themes/cerulean/bulma.min.css')
// .sass('resources/assets/sass/themes/clean.scss', 'public/themes/clean/bulma.min.css')
// .sass('resources/assets/sass/themes/cosmo.scss', 'public/themes/cosmo/bulma.min.css')
// .sass('resources/assets/sass/themes/cyborg.scss', 'public/themes/cyborg/bulma.min.css')
// .sass('resources/assets/sass/themes/darkly.scss', 'public/themes/darkly/bulma.min.css')
// .sass('resources/assets/sass/themes/flatly.scss', 'public/themes/flatly/bulma.min.css')
// .sass('resources/assets/sass/themes/journal.scss', 'public/themes/journal/bulma.min.css')
// .sass('resources/assets/sass/themes/litera.scss', 'public/themes/litera/bulma.min.css')
// .sass('resources/assets/sass/themes/lumen.scss', 'public/themes/lumen/bulma.min.css')
// .sass('resources/assets/sass/themes/lux.scss', 'public/themes/lux/bulma.min.css')
// .sass('resources/assets/sass/themes/materia.scss', 'public/themes/materia/bulma.min.css')
// .sass('resources/assets/sass/themes/minty.scss', 'public/themes/minty/bulma.min.css')
// .sass('resources/assets/sass/themes/pulse.scss', 'public/themes/pulse/bulma.min.css')
// .sass('resources/assets/sass/themes/sandstone.scss', 'public/themes/sandstone/bulma.min.css')
// .sass('resources/assets/sass/themes/simplex.scss', 'public/themes/simplex/bulma.min.css')
// .sass('resources/assets/sass/themes/slate.scss', 'public/themes/slate/bulma.min.css')
// .sass('resources/assets/sass/themes/solar.scss', 'public/themes/solar/bulma.min.css')
// .sass('resources/assets/sass/themes/spacelab.scss', 'public/themes/spacelab/bulma.min.css')
// .sass('resources/assets/sass/themes/superhero.scss', 'public/themes/superhero/bulma.min.css')
// .sass('resources/assets/sass/themes/united.scss', 'public/themes/united/bulma.min.css')
// .sass('resources/assets/sass/themes/yeti.scss', 'public/themes/yeti/bulma.min.css')

// if (process.env.NODE_ENV === 'production') {
    .version();
// }
