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
        'li'
      ]
    },
    autoprefixer: {},
    cssnano: { preset: ['default', { discardComments: { removeAll: true } }], }
  },
};
