module.exports = {
    "root": true,
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
	env: {
        browser: true,
        jquery: true,
        es6: true,
    },
    extends: [
    	"airbnb-base",
    	"plugin:vue/recommended"
    ],
    plugins: [
        'vue',
    ],
    globals: {
        _: true,
        moment: true,
        axios: true,
        toastr: true,
        PageStore: true,
        route: true,
    },
    rules: {
        indent: ["error", 4],
        "no-plusplus": 0,
        "no-debugger": 0,
        "no-underscore-dangle": ["error", { "allow": ["__"] } ],
        "no-param-reassign": 0,
        "no-mixed-operators": 0,
        "func-names": 0,
        "no-shadow": 0,
    },
};