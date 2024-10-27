import { Label } from "./Label";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

export default {
  title: "Label",
  component: Label,
  argTypes: {
    text: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: "This is a label",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: "This is a disabled label",
    disabled: true,
  },
};
