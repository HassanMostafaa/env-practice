import { type Meta, type StoryObj } from "@storybook/react";
import { type FunctionComponent } from "react";

import { Nav } from "./index";
import { INav } from "./Nav";

const Template: FunctionComponent<INav> = (args) => (<Nav {...args}/>);

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
  title: "Atoms/Nav",
};

export default meta;

type Story = StoryObj<typeof Nav>;

export const Default: Story = {
  args: {
   
  },
};

