/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@electron-toolkit',
    '@electron-toolkit/eslint-config-ts/eslint-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'no-fallthrough': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off'
  }
};
