import { type Meta, type StoryObj } from "@storybook/react";
import { type FunctionComponent } from "react";

import { SimpleButton } from "./index";
import { ISimpleButton } from "./SimpleButton";

const Template: FunctionComponent<ISimpleButton> = (args) => (<SimpleButton {...args}/>);

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
  title: "Atoms/SimpleButton",
};

export default meta;

type Story = StoryObj<typeof SimpleButton>;

export const Default: Story = {
  args: {
   
  },
};

