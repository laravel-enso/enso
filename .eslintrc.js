module.exports = {
    "root": true,
    extends: [
        '@vue/airbnb',
    	"plugin:vue/recommended"
    ],
    plugins: [
        'vue',
    ],
    globals: {
        axios: true,
        route: true,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ["error", 4],
        "vue/html-indent": 0,
        'vue/attributes-order': 0,
        "no-plusplus": 0,
        "no-debugger": 0,
        "no-underscore-dangle": ["error", { "allow": ["__"] } ],
        "no-param-reassign": 0,
        "no-mixed-operators": 0,
        "func-names": 0,
        "no-shadow": 0,
        "vue/max-attributes-per-line": 0,
        "no-return-assign": ["error", "except-parens"]
    },
};