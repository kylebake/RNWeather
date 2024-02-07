module.exports = {
  root: true,
  rules: {
    'prettier/prettier': ['error'],
    semi: [2, 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'key-spacing': ['error', { mode: 'minimum' }],
    'max-depth': ['error', 2],
    'require-await': 'error',
    curly: ['error', 'multi-line', 'consistent'],

    // #region TypeScript rules

    // Enforce only on the root package.json
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }],

    // Not forcing ts and tsx file extension on imports
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never', tsx: 'never', js: 'never' },
    ],

    // Disable the default "no-shadow" for the typescript alternative
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    // Disable the default no-unused-vars for the typescript alternative
    // Fixes false positives, such as importing types
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    // Disable the default "no-use-before-define" for the typescript alternative
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      // Relaxing no use before define for variables, to allow StyleSheet to be defined below React Components
      { functions: true, classes: true, variables: false },
    ],

    // See: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
    '@typescript-eslint/consistent-type-imports': ['error'],

    // #endregion TypeScript rules

    // Enforce padding lines between different statement types
    'padding-line-between-statements': [
      'error',
      // Enforce a padding line between multiline block types
      {
        blankLine: 'always',
        prev: 'multiline-block-like',
        next: 'multiline-block-like',
      },
    ],

    // #region React rules

    'react/self-closing-comp': [
      'error',
      {
        component: false,
        html: false,
      },
    ],
    'react/no-did-mount-set-state': ['off', 'never'],
    'react/no-array-index-key': 'error',
    'react/no-unused-state': 'error',
    'react/boolean-prop-naming': [
      'error',
      {
        rule: '^(darkMode|disabled|underline|value|(allow|disable|enable|has|include|is|place|show|use)[A-Z]([A-Za-z0-9]?)+)',
      },
    ],
    'react/destructuring-assignment': 'error',
    'react/jsx-key': 'error',
    'react/no-typos': 'error',
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    'react/prop-types': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/static-property-placement': 'off',

    // #endregion React rules

    // #region React Native rules

    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/no-raw-text': ['error', { skip: ['LinkText', 'Text', 'Text.Text'] }],
    // disable enforcement of sorted styles
    'react-native/sort-styles': 'off',

    // #endregion React Native rules

    // #region React Hooks

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useHeartbeatEffect)',
      },
    ],

    // #endregion React Hooks
  },
}
