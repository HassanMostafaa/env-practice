import { type Meta, type StoryObj } from "@storybook/react";
import { type FunctionComponent } from "react";

import { Rootlayout } from "./index";
import { IRootlayout } from "./Rootlayout";

const Template: FunctionComponent<IRootlayout> = (args) => (<Rootlayout {...args}/>);

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
  title: "Atoms/Rootlayout",
};

export default meta;

type Story = StoryObj<typeof Rootlayout>;

export const Default: Story = {
  args: {
   
  },
};

