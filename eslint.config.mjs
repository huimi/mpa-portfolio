// import react from 'eslint-plugin-react';
import  eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default [
  // standard,
  ...compat.extends('eslint-config-standard'),
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error"
    }
  },
  ...compat.env({
      es2020: true,
      node: true
  }),
  ...compat.plugins("react"),
  ...compat.config({
    plugins: ["react"],
    extends: "standard",
    env: {
      es2020: true,
      node: true
    },
    rules: {
      semi: 0,
      "react/jsx-uses-react": "error",   
      "react/jsx-uses-vars": "error"
    }
  }),
];
