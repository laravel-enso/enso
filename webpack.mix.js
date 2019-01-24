const mix = require('laravel-mix');

mix
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
    .sass('resources/sass/themes/light.scss', 'public/themes/light/bulma.min.css')
    .sass('resources/sass/themes/dark.scss', 'public/themes/dark/bulma.min.css')
    .js('resources/js/enso.js', 'public/js')
    .extract([
        '@fortawesome/fontawesome-free', '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-brands-svg-icons', '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-solid-svg-icons', '@fortawesome/vue-fontawesome', 'accounting-js',
        'axios', 'chart.js', 'chartjs-plugin-datalabels', 'css-element-queries', 'date-fns',
        'dropzone', 'file-saver', 'flatpickr', 'laravel-echo', 'lodash', 'popper.js',
        'pusher-js', 'quill', 'raven-js', 'textarea-caret', 'tiptap', 'tiptap-commands',
        'tiptap-extensions', 'tooltip.js', 'v-click-outside', 'v-tooltip', 'vue',
        'vue-quill-editor', 'vue-router', 'vuedraggable', 'vuex',
    ])
    // .js('resources/js/tableExample.js', 'public/js')
    // .js('resources/js/selectExample.js', 'public/js')
    .sourceMaps();

if (mix.inProduction()) {
    mix.version();
}
