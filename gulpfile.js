const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

elixir((mix) => {
	mix.copy('resources/assets/images', 'public/images')
		.copy('node_modules/bootstrap-sass/assets/fonts/bootstrap/', 'public/fonts/bootstrap')
		.copy('resources/assets/libs/datatables-lang', 'public/libs/datatables-lang');

    mix.styles(["resources/assets/sass/admin-lte-skins.css",
    	"resources/assets/sass/vue2-animate.css"
	], 'public/css/all.css', './');

	mix.sass('app.scss')
		.sass('main.scss')
		.sass('auth.scss')
		.sass('error.scss')
		.sass('welcome.scss')
		.webpack('auth.js')
		.webpack('app.js')
		.webpack('defaults.js');

	mix.version([
		'css/all.css', 'css/app.css', 'css/main.css', 'css/auth.css',
		'css/error.css', 'css/welcome.css', 'js/auth.js', 'js/app.js', 'js/defaults.js'
	]);
});