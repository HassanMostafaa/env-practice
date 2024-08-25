import { type Meta, type StoryObj } from "@storybook/react";
import { type FunctionComponent } from "react";

import { Footer } from "./index";
import { IFooter } from "./Footer";

const Template: FunctionComponent<IFooter> = (args) => (<Footer {...args}/>);

const meta: Meta = {
  argTypes: {
    
  },
  component: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/...",
    },
  },
  title: "Atoms/Footer",
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
   
  },
};

