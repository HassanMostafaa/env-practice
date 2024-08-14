import type { Meta, StoryObj } from "@storybook/react";
import { SimpleCard } from "./SimpleCard";

const meta = {
  title: "Example/SimpleCard",
  component: SimpleCard,
  parameters: {},
  tags: ["test tag"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SimpleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "text T",
    title: "title T",
  },
};

export const Secondary: Story = {
  args: {
    text: "text T Secondary",
    title: "title T Secondary",
  },
};
