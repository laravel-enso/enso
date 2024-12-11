module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-recommended',
        '@vue/airbnb',
    ],
    plugins: [
        'vue',
    ],
    globals: {
        axios: true,
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@ui', `${__dirname}/node_modules/@enso-ui/ui/src`],
                    ['@root', `${__dirname}/src/js`],
                    ['@pages', `${__dirname}/src/js/pages`],
                    ['@store', `${__dirname}/src/js/store`],
                    ['@components', `${__dirname}/src/js/components`],
                ],
            },
        },
    },
    parserOptions: {
        parser: '@babel/eslint-parser', 
        sourceType: 'module',
        ecmaVersion: 2021,
        requireConfigFile: false,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4],
        'arrow-parens': ['error', 'as-needed'],
        'vue/html-indent': 0,
        'vue/attributes-order': 0,
        'no-plusplus': 0,
        'no-param-reassign': 0,
        'no-mixed-operators': 0,
        'no-underscore-dangle': 0,
        'func-names': 0,
        'no-shadow': 0,
        'vue/multi-word-component-names': 0,
        'vue/max-attributes-per-line': 0,
        'vue/first-attribute-linebreak': 0,
        'no-return-assign': ['error', 'except-parens'],
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never',
        }],
        'vue/html-closing-bracket-spacing': ['error', {
            startTag: 'never',
            endTag: 'never',
            selfClosingTag: 'never',
        }],
    },
};
