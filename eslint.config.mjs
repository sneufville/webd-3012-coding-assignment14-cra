import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {ignores: ['build/*', 'tailwind.config.js', 'postcss.config.js']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { files: ["**/*.jsx", "**/*.tsx"], languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  pluginReactConfig,
];
