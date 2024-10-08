import { type Meta, type StoryObj } from "@storybook/react";
import { type FunctionComponent } from "react";

import { {{pascalCase name}} } from "./index";
import { I{{pascalCase name}} } from "./{{pascalCase name}}";

const Template: FunctionComponent<I{{pascalCase name}}> = (args) => (<{{pascalCase name}} {...args}/>);

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
  title: "Atoms/{{pascalCase name}}",
};

export default meta;

type Story = StoryObj<typeof {{pascalCase name}}>;

export const Default: Story = {
  args: {
   
  },
};

