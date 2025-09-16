const config = {
  "stories": [
    '../components/**/**/*.stories.json'
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-styling-webpack"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {
      "builder": {
        "useSWC": true
      }
    },
  }
};
export default config;