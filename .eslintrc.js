/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "next",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/restrict-template-expressions": "off",
    // ограничивает использование {} в качестве типа
    "@typescript-eslint/ban-types": "off",
    // импорт типов должен быть импортирован как import type
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        fixStyle: "separate-type-imports",
        disallowTypeAnnotations: false,
      },
    ],
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  ignorePatterns: [
    "**/*.config.js",
    "**/*.config.cjs",
    ".eslintrc.cjs",
    '.eslintrc.js',
    "packages/config/**",
    "**/dist/**",
    "**/.next/**",
  ],
  reportUnusedDisableDirectives: true,
};

module.exports = config;
