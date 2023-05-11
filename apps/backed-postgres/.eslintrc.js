module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier", "prettier/@typescript-eslint", "plugin:prettier/recommended", "plugin:import/typescript", "plugin:import/errors", "plugin:import/warnings",  "plugin:import/recommended"],
    env: {
        node: true,
        es6: true,
    },
    // projects: ["./tsconfig.json"],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": "error",
    },
};
