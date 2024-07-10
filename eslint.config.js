import js from '@eslint/js';
import eslintPluginPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginTailWind from 'eslint-plugin-tailwindcss';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import tselint from 'typescript-eslint';

import globals from 'globals';

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...js.configs.recommended,
  ...tselint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
  ...eslintPluginTailWind.configs['flat/recommended'],
  ...eslintPluginUnicorn.configs['flat/recommended'],
  ...eslintPluginImport.configs.recommended,
  { 
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        requireConfigFile: false
      },
    },
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
      'astro/jsx-a11y/iframe-has-title': 'off',
      'astro/jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'] // Because it takes a lot of time!!!
        }
      ],
      'import/no-unresolved': 'off',
      'no-const-assign': 'warn',
      'no-extra-boolean-cast': 'warn',
      'no-irregular-whitespace': 'warn',
      'no-unused-vars': 'warn',
      'prefer-const': 'warn',
      'prettier/prettier': 'warn',
      quotes: 'off',
      'spaced-comment': ['warn', 'always'],
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/enforces-negative-arbitrary-values': 'off',
      'max-len': [
        'warn',
        {
          code: 100,
          tabWidth: 2,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true
        }
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'tailwindcss/classnames-order': 'off'
    },
    ignores: ['env.d.ts']
  },
  ...eslintPluginPrettier.configs.recommended,
];

