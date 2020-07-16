module.exports = {
  parser: "babel-eslint",
  env: {
    node:true,
    browser: true,
  },
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  plugins: [
    "react",
    "import",
  ],
  settings: {
    "import/resolver":{
      node:{
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ['node_modules', 'src/'],
      },
      webpack: {
        config: './webpack.config.js',
      }
    }
  },
  rules: {
    "prettier/prettier": ["error", {"singleQuote": true }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "require-yield":0,
    "import/extensions":0,
    "no-underscore-dangle":0,
    "no-console": ["error", {
      allow: ["assert"],
    }],
    "func-names": ["error", "as-needed", { "generators": "never" }],
    "import/prefer-default-export": 0,
    "no-param-reassign": [2, { "props": false }],
    "no-unused-vars": ["error", {
      "argsignorepattern": "^_",
      "varsignorepattern": "^_",
    }],
  },
  globals: {
    document:'readonly',
    window:'readonly',
    fetch:'readonly',
  },
};
