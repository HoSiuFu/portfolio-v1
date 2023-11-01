import type { Preview } from "@storybook/react";
import '../src/styles/global.scss';
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      }
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
