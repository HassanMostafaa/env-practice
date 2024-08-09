import { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  framework: "@storybook/nextjs", // 👈 Add this
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [],
  staticDirs: [
    {
      from: "../src/components/fonts",
      to: "src/components/fonts",
    },
  ],
};

export default config;
