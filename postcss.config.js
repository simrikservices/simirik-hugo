module.exports = {
  map: false,
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['./themes/**/*.html', './static/js/**/*.js'],
      safelist: [
        'highlight',
        'language-bash',
        'pre',
        'video',
        'code',
        'content',
        'h3',
        'h4',
        'ul',
        'li',
        'i',
        'fas',
        'fa-plane',
        'fa-user-shield',
        'fa-hard-hat',
        'fa-id-card-alt',
        'fa-school',
        'fa-store',
        'fa-home',
        'fa-hotel',
        'fa-hospital',
        'fa-dog'
      ]
    },
    autoprefixer: {},
    cssnano: { preset: ['default', { discardComments: { removeAll: true } }], }
  },
};
