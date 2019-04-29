const mix = require('laravel-mix');

mix
    .webpackConfig({
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@core-routes': `${__dirname}/node_modules/@enso-ui/ui/src/bulma/routes`,
                '@core-pages': `${__dirname}/node_modules/@enso-ui/ui/src/bulma/pages`,
                '@core-middleware': `${__dirname}/node_modules/@enso-ui/ui/src/middleware`,
                '@core-modules': `${__dirname}/node_modules/@enso-ui/ui/src/modules`,
                '@root': `${__dirname}/resources/js`,
                '@pages': `${__dirname}/resources/js/pages`,
                '@store': `${__dirname}/resources/js/store`,
                '@components': `${__dirname}/resources/js/components`,
            },
        },
    })
    .options({
        hmrOptions: {
            port: '3030',
        },
        processCssUrls: false,
        uglify: {
            parallel: true,
            cache: true,
            uglifyOptions: {
                mangle: true,
                compress: true,
            },
        },
    })
    .copyDirectory('resources/images', 'public/images')
    .sass('resources/sass/enso.scss', 'public/css')
    .sass('node_modules/@enso-ui/themes/bulma/light.scss', 'public/themes/light/bulma.min.css')
    .sass('node_modules/@enso-ui/themes/bulma/dark.scss', 'public/themes/dark/bulma.min.css')
    .sass('node_modules/@enso-ui/themes/bulma/light-rtl.scss', 'public/themes-rtl/light/bulma.min.css')
    .sass('node_modules/@enso-ui/themes/bulma/dark-rtl.scss', 'public/themes-rtl/dark/bulma.min.css')
    .js('resources/js/enso.js', 'public/js')
    .extract([
        '@enso-ui/accessories/bulma', '@enso-ui/bulma', '@enso-ui/card/bulma',
        '@enso-ui/charts/bulma', '@enso-ui/confirmation/bulma', '@enso-ui/datepicker/bulma',
        '@enso-ui/directives', '@enso-ui/divider', '@enso-ui/dropdown/bulma',
        '@enso-ui/dropdown-indicator', '@enso-ui/filters/bulma', '@enso-ui/forms/bulma',
        '@enso-ui/loader/bulma', '@enso-ui/mixins', '@enso-ui/modal/bulma', '@enso-ui/money',
        '@enso-ui/progress-bar', '@enso-ui/select/bulma', '@enso-ui/switch/bulma',
        '@enso-ui/tables/bulma', '@enso-ui/tabs/bulma', '@enso-ui/toastr/bulma',
        '@enso-ui/transitions', '@enso-ui/typeahead/bulma', '@enso-ui/ui/bulma',
        '@enso-ui/uploader/bulma', '@fortawesome/fontawesome-free',
        '@fortawesome/fontawesome-svg-core', '@fortawesome/free-brands-svg-icons',
        '@fortawesome/free-regular-svg-icons', '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome', 'accounting-js', 'axios', 'chart.js',
        'chartjs-plugin-datalabels', 'css-element-queries', 'date-fns',
        'dropzone', 'file-saver', 'flatpickr', 'laravel-echo', 'lodash', 'popper.js',
        'pusher-js', 'quill', 'raven-js', 'textarea-caret', 'tiptap', 'tiptap-commands',
        'tiptap-extensions', 'tooltip.js', 'v-tooltip', 'vue', 'vue-quill-editor',
        'vue-router', 'vuedraggable', 'vuex',
    ])
    .js('resources/js/tableExample.js', 'public/js')
    .js('resources/js/selectExample.js', 'public/js')
    .sourceMaps();

if (mix.inProduction()) {
    mix.version();
}
