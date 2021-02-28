let mix = require('laravel-mix');

const tailwindcss = require('tailwindcss');

mix
	.options({
		processCssUrls: false,
		terser: {
			extractComments: false,
		},
		postCss: [
			tailwindcss()
		],
	})
	.sourceMaps(true, 'inline-source-map')
	.sass('scss/style.scss', 'build/css')
	.sass('scss/tailwind-utils.scss', 'build/css')
;

if (mix.inProduction()) {
	mix.combine([
		'build/css/style.css',
		'build/css/tailwind-utils.css'
	], 'build/css/production.css');
}