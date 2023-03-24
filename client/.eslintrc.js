module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'import/no-unresolved': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'no-unused-vars': 0,
    'react/button-has-type': 0,
    'import/extensions': 0,
    'import/named': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-plusplus': 0,
    'no-unused-expressions': 0,
    'no-console': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
