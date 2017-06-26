let mix = require('laravel-mix').mix;

mix
	.copyDirectory('resources/assets/images', 'public/images')
	.copyDirectory('node_modules/bootstrap-sass/assets/fonts/bootstrap', 'public/fonts/bootstrap')

	.styles(["resources/assets/sass/admin-lte-skins.css"], 'public/css/all.css')

	.js('resources/assets/js/app.js', 'public/js')
	.js('resources/assets/js/auth.js', 'public/js')
	.js('resources/assets/js/defaults.js', 'public/js')

	.sass('resources/assets/sass/app.scss', 'public/css')
	.sass('resources/assets/sass/main.scss', 'public/css')
	.sass('resources/assets/sass/auth.scss', 'public/css')
	.sass('resources/assets/sass/error.scss', 'public/css')
	.sass('resources/assets/sass/welcome.scss', 'public/css')
	.version();