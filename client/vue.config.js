const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    pages: {
        main: {
            entry: 'src/js/enso.js',
            minify: true,
            filename: process.env.NODE_ENV === 'production'
                ? '../resources/views/vendor/laravel-enso/core/index.blade.php'
                : './index.html',
            template: process.env.NODE_ENV === 'production'
                ? '../vendor/laravel-enso/core/stubs/production-index.blade.stub'
                : '../vendor/laravel-enso/core/stubs/development-index.stub',
        },
    },
    devServer: {
        proxy: {
            '/api': {
                target: process.env.API_URL,
                changeOrigin: true,
            },
            '/broadcasting': {
                target: process.env.API_URL,
                changeOrigin: true,
            },
        },
    },
    outputDir: '../public/',
    configureWebpack: {
        resolve: {
            alias: {
                '@core': `${__dirname}/node_modules/@enso-ui/ui/src`,
                '@root': `${__dirname}/src/js`,
                '@pages': `${__dirname}/src/js/pages`,
                '@store': `${__dirname}/src/js/store`,
                '@components': `${__dirname}/src/js/components`,
                '@calendar': `${__dirname}/node_modules/@enso-ui/calendar/src/bulma`,
            },
        },
        plugins: [
            new CopyPlugin([{
                from: 'node_modules/@enso-ui/ui/src/resources/images',
                to: 'images',
                force: true,
                folder: true,
            }, {
                from: '../vendor/laravel-enso/core/src/resources/images',
                to: 'images',
                force: true,
                folder: true,
            }]),
        ],
    },
    chainWebpack: (config) => {
        const scssRules = config.module.rule('scss').oneOfs;
        const normalRule = scssRules.store.get('normal');
        const lazyRule = config.module.rule('scss').oneOf('scss-lazy');

        normalRule.uses.values().forEach((use) => {
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
            .tap(options => Object.assign(
                {}, options, { name: 'images/[name].[ext]' },
            ));

        config.module
            .rule('svg')
            .use('file-loader')
            .tap(options => Object.assign(
                {}, options, { name: 'images/[name].[ext]' },
            ));
    },
    productionSourceMap: false,
    css: {
        extract: false,
    },
};
