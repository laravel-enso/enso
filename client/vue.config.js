const CopyPlugin = require('copy-webpack-plugin');
const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const path = require('path');

const inProduction = process.env.NODE_ENV === 'production';
const usesSentry = process.env.SENTRY_AUTH_TOKEN
    && process.env.SENTRY_PROJECT && process.env.SENTRY_ORG;

if (inProduction && !usesSentry) {
    console.warn('For better error handing please configure sentry');
}

module.exports = {
    transpileDependencies: [
        '@enso-ui/route-mapper',
        '@enso-ui/strings',
        '@enso-ui/toastr',
    ],
    publicPath: '/',
    outputDir: '../public/',
    indexPath: inProduction
        ? '../resources/views/index.blade.php'
        : 'index.html',
    pages: {
        main: {
            entry: 'src/js/enso.js',
            minify: !inProduction,
            template: inProduction
                ? '../vendor/laravel-enso/core/stubs/production-index.blade.stub'
                : '../vendor/laravel-enso/core/stubs/development-index.stub',
            filename: inProduction
                ? '../resources/views/index.blade.php'
                : 'index.html',
        },
    },
    devServer: {
        proxy: {
            '^/api': {
                target: process.env.API_URL,
            },
            '^/broadcasting': {
                target: process.env.API_URL,
            },
        },
    },
    configureWebpack: {
        devtool: inProduction ? 'hidden-source-map' : 'source-map',
        resolve: {
            alias: {
                '@core': path.resolve(__dirname, '/node_modules/@enso-ui/ui/src'),
                '@root': path.resolve(__dirname, '/src/js'),
                '@pages': path.resolve(__dirname, '/src/js/pages'),
                '@store': path.resolve(__dirname, '/src/js/store'),
                '@components': path.resolve(__dirname, '/src/js/components'),
            },
        },
        plugins: [
            inProduction && usesSentry && new SentryWebpackPlugin({
                include: '../public',
                ignoreFile: '.sentrycliignore',
                authToken: process.env.SENTRY_AUTH_TOKEN,
                org: process.env.SENTRY_ORG,
                project: process.env.SENTRY_PROJECT,
                release: process.env.SENTRY_RELEASE,
                ignore: ['vendor'],
            }),
            new CopyPlugin({
                patterns: [{
                    from: '../resources/images',
                    to: 'images',
                    force: true,

                }],
            }),
        ].filter(p => p),
    },
    chainWebpack: config => {
        const scssRules = config.module.rule('scss').oneOfs;
        const normalRule = scssRules.store.get('normal');
        const lazyRule = config.module.rule('scss').oneOf('scss-lazy');

        // config.module
        //     .rule('scss')
        //     .oneOfs.store
        //     .forEach(item => {
        //         item
        //             .use('style-loader')
        //             .loader('style-loader')
        //             .options({
        //                 injectType: 'styleTag',
        //                 insert: function insertAtTop(element) {
        //                     const parent = document.querySelector('head');
        //                     parent.insertBefore(element, parent.firstChild);
        //                 },
        //             });
        //     });

        normalRule.uses.values().forEach(use => {
            if (use.name !== 'vue-style-loader') {
                lazyRule.use(use.name).merge(use.entries());
                return;
            }

            lazyRule.use('style-loader')
                .loader('style-loader')
                .options({
                    injectType: 'lazyStyleTag',
                    insert: function insertAtTop(element) {
                        const parent = document.querySelector('head');
                        parent.insertBefore(element, parent.firstChild);
                    },
                });
        });

        lazyRule.test(/\.lazy\.scss$/);

        scssRules.store.delete('normal', 'scss-lazy');
        scssRules.store.set('scss-lazy', lazyRule);
        scssRules.store.set('normal', normalRule);

        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => ({
                ...options, name: 'images/[name].[ext]',
            }));

        config.module
            .rule('svg')
            .use('file-loader')
            .loader('file-loader')
            .tap(options => ({
                ...options, name: 'images/[name].[ext]',
            }));
    },
    css: {
        sourceMap: true,
        extract: false,
    },
};
