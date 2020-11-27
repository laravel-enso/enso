const CopyPlugin = require('copy-webpack-plugin');
const SentryWebpackPlugin = require('@sentry/webpack-plugin');

const inProduction = process.env.NODE_ENV === 'production';
const usesSentry = process.env.SENTRY_AUTH_TOKEN
    && process.env.SENTRY_PROJECT && process.env.SENTRY_ORG;

if (inProduction && !usesSentry) {
    console.warn('For better error handing please configure sentry');
}

module.exports = {
    pages: {
        main: {
            entry: 'src/js/enso.js',
            minify: true,
            filename: inProduction
                ? '../resources/views/index.blade.php'
                : './index.html',
            template: inProduction
                ? '../vendor/laravel-enso/core/stubs/production-index.blade.stub'
                : '../vendor/laravel-enso/core/stubs/development-index.stub',
        },
    },
    devServer: {
        proxy: {
            '/api': {
                target: process.env.API_URL,
            },
            '/broadcasting': {
                target: process.env.API_URL,
            },
        },
    },
    outputDir: '../public/',
    configureWebpack: {
        devtool: inProduction ? 'hidden-source-map' : 'source-map',
        resolve: {
            alias: {
                '@core': `${__dirname}/node_modules/@enso-ui/ui/src`,
                '@root': `${__dirname}/src/js`,
                '@pages': `${__dirname}/src/js/pages`,
                '@store': `${__dirname}/src/js/store`,
                '@components': `${__dirname}/src/js/components`,
            },
        },
        plugins: [
            inProduction && usesSentry && new SentryWebpackPlugin({
                include: '../public',
                ignoreFile: '.sentrycliignore',
                release: process.env.SENTRY_RELEASE,
                ignore: ['vendor'],
            }),
            new CopyPlugin([{
                from: '../resources/images',
                to: 'images',
                force: true,
                folder: true,
            }]),
        ].filter(p => p),
    },
    chainWebpack: config => {
        const scssRules = config.module.rule('scss').oneOfs;
        const normalRule = scssRules.store.get('normal');
        const lazyRule = config.module.rule('scss').oneOf('scss-lazy');

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
            .tap(options => ({
                ...options, name: 'images/[name].[ext]',
            }));

        config.module
            .rule('svg')
            .use('file-loader')
            .tap(options => ({
                ...options, name: 'images/[name].[ext]',
            }));
    },
    css: {
        sourceMap: true,
        extract: false,
    },
};
