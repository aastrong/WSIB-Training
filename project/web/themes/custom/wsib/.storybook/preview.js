/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Styleguide',
          'Components',
          'Components (Beta*)',
          'Changelog',
        ],
      },
    },
    cssprops: {
    },
    viewport: {
      defaultViewport: 'reset',
    },
  },
};

export default preview;