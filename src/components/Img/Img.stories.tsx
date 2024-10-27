import { Img } from "./Img";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

export default {
  title: "Image",
  component: Img,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Img>;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "Image",
    backgroundColor: "#ffffff",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "Disabled Image",
    backgroundColor: "#f5f5f5",
    disabled: true,
  },
};
