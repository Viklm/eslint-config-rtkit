
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";
import importPlugin from 'eslint-plugin-import';
import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import tsPlugin from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import destructuring from 'eslint-plugin-destructuring';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});


// eslint
import commonRules from'./rules/common.js';
// eslint-plugin-import
import importRules from'./rules/import.js';
// eslint-plugin-prettier
import prettierRules from'./rules/prettier.js';
// eslint-plugin-react
import reactRules from'./rules/react.js';
// eslint-plugin-destructuring
import destructuringRules from'./rules/destructuring.js';
// eslint‑plugin‑jsx‑a11y
import jsxA11yRules from'./rules/jsx-a11y.js';
// eslint-plugin-simple-import-sort
import simpleImportSortRules from'./rules/simple-import-sort.js';
// @typescript-eslint-*
import typescriptRules from'./rules/typescript.js';


const recommendedRules = {
  ...commonRules,
  ...importRules,
  ...reactRules,
  ...destructuringRules,
  ...jsxA11yRules,
  ...simpleImportSortRules,
  ...typescriptRules,
  ...prettierRules,
}

const recommended = [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  jsxA11yPlugin.flatConfigs.recommended,
  ...tsPlugin.configs.recommended,
  ...tsPlugin.configs.strict,
  ...tsPlugin.configs.stylistic,
  eslintPluginPrettierRecommended,

  ...compat.extends("plugin:destructuring/recommended"),

  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      destructuring,
    },
    rules: {
      ...recommendedRules,
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
  },
];

const common = [
  js.configs.recommended,
  {
    rules: commonRules,
  },
];
const importConfig = [
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    rules: importRules,
  },
];
const prettier = [
  eslintPluginPrettierRecommended,
  {
    rules: prettierRules,
  },
];
const react = [
  reactPlugin.configs.flat.recommended,
  {
    rules: reactRules,
  },
];
const jsxA11y = [
  jsxA11yPlugin.flatConfigs.recommended,
];
const typescript = [
  ...tsPlugin.configs.recommended,
  {
    rules: typescriptRules,
  },
];

const configs = {
  recommended,
  common,
  import: importConfig,
  prettier,
  react,
  jsxA11y,
  typescript,
};

const rules = {
  recommended: recommendedRules,
  common: commonRules,
  import: importRules,
  prettier: prettierRules,
  react: reactRules,
  destructuring: destructuringRules,
  jsxA11y: jsxA11yRules,
  typescript: typescriptRules,
};

export default {
  configs,
  rules,
};
