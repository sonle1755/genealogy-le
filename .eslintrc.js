module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/typescript'
  ],
  rules: {
    "no-console": "warn",
    "vue/singleline-html-element-content-newline": "off",
    "vue/no-unused-vars": "warn",
    "vue/component-name-in-template-casing": ["error", "PascalCase", {
      "registeredComponentsOnly": false,
      "ignores": ["/^router-/", "component"]
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }]
  }
}
