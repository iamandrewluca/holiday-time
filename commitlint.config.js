module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', Infinity],
    'footer-max-line-length': [2, 'always', Infinity],
  },
}
