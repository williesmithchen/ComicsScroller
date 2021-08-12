module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 85,
  proseWrap: 'never',
  endOfLine: 'auto',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
  arrowParens: 'avoid',
  bracketSpacing: true,
  jsxBracketSameLine: true,
};
