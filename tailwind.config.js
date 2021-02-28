const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const breakpoints = {
  'desktop-large'		    : 1400,
  'desktop-medium'	    : 1250,
  'desktop-small'		    : 1020,
  'responsive-nav'	    : 1020,
  'tablet-v-large'	    : 900,
  'tablet-large'		    : 800,
  'mobile-wrapper'	    : 800,
  'tablet-medium'		    : 700,
  'tablet-small'		    : 600,
  'responsive-headings'	: 600,
  'phone-v-large'		    : 480,
  'phone-large'		      : 420,
  'phone-medium'		    : 375,
  'phone-small'		      : 320,
};

const screens = {};

for (const bp in breakpoints) {
  if (Object.hasOwnProperty.call(breakpoints, bp)) {
    const value = breakpoints[bp];
    screens[`from-${bp}`] = { min: `${value + 1}px`};
    screens[`to-${bp}`] = { max: `${value}px`};
  }
}

module.exports = {
  purge: {
    content: [
      './*.php',
      './includes/**/*.php',
      './functions/**/*.php',
      './templates/**/*.php',
      './js/**/*.js',
    ],
    options: {
      safelist: [
        'slick-dots',
        'slick-list',
        'slick-track',
        'span.error',
        'gm-style-iw',
      ],
    },
  },
  prefix: 'u-',
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'gray': colors.trueGray,
      'black': '#000',
      'white': '#fff',
      'primary': '#4F46E5',
      'primary-light': '#6366F1',
      'success': '#10b00e',
      'error': '#af1d1d',
      'error-light': '#fee2e2',
      'text-body': '#414042',
      'text-heading': '#1E1E1E',
    },
    screens: {
      ...screens,
      'iphone-se'				: { raw: '(max-width: 320px) and (max-height: 568px)' },
      'iphone-678'			: { raw: '(max-width: 375px) and (max-height: 667px)' },
      'iphone-678-plus'	: { raw: '(max-width: 414px) and (max-height: 736px)' },
      'iphone-x'				: { raw: '(max-width: 375px) and (max-height: 812px)' },
      'late-ie'					: { raw: '(-ms-high-contrast: none), (-ms-high-contrast: active)' },
    },
    extend: {
      spacing: {
        default: defaultTheme.spacing[8],
        section: defaultTheme.spacing[20],
        paragraph: defaultTheme.spacing[6],
        heading: defaultTheme.spacing[6],
        gutter: defaultTheme.spacing[8],
        listItem: defaultTheme.spacing[2],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
