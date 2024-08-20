import { type Meta, type StoryObj } from "@storybook/react";
import { type FunctionComponent } from "react";

import { Container } from "./index";
import { IContainer } from "./Container";

const Template: FunctionComponent<IContainer> = (args) => (<Container {...args}/>);

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
  title: "Atoms/Container",
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
   
  },
};

