import "./index.css";
import { themes } from "@storybook/theming";
import { initialize, mswDecorator } from "msw-storybook-addon";

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "#333" },
    // Override the default light theme
    light: { ...themes.normal, appBg: "#eee" },
    classTarget: "body",
    stylePreview: true,
  },
};
