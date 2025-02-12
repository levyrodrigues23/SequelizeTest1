import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      "camelcase": "off",
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    },
  },
  pluginJs.configs.recommended,   // Configuração do ESLint para JS
  eslintConfigPrettier,           // Configuração para desabilitar regras conflitantes com Prettier
  eslintPluginPrettier.configs.recommended, // Configuração do Prettier no ESLint
];
