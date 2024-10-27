import { Card } from "./Card";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    title: { control: "text" }, // Control for title
    content: { control: "text" }, // Control for content
    backgroundColor: { control: "color" }, // Control for background color
    disabled: { control: "boolean" }, // Control to toggle disabled state
  },
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Card Title",
    content: "This is the card content.",
    backgroundColor: "#ffffff", // Default background color
    disabled: false, // Default disabled state
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled Card",
    content: "This card is disabled.",
    backgroundColor: "#f5f5f5", // Disabled background color
    disabled: true, // Disabled state is true
  },
};
