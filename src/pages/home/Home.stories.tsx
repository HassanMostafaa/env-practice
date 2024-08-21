import { type Meta, type StoryObj } from "@storybook/react";
import { type FunctionComponent } from "react";

import { Home } from "./index";
import { IHome } from "./Home";

const Template: FunctionComponent<IHome> = (args) => (<Home {...args}/>);

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
  title: "Atoms/Home",
};

export default meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = {
  args: {
   
  },
};

