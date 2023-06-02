module.exports = {
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jest-formatting/recommended",
  ],
  plugins: ["prettier", "jest", "jest-formatting"],
  rules: {
    "max-len": "off",
    "no-underscore-dangle": 0,
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    camelcase: 0,
  },
  env: {
    jest: true,
  },
};
