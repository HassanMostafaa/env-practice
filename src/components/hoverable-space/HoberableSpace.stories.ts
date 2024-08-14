import type { Meta, StoryObj } from "@storybook/react";
import { HoverableSpace } from "./HoverableSpace";
const meta = {
  title: "Example/HoverableSpace",
  component: HoverableSpace,
  parameters: {},
  tags: ["test tag"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof HoverableSpace>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
