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
  },
};
