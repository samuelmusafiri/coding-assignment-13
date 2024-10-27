import { StoryFn, Meta } from "@storybook/react";
import { Button } from "./Button";
import { ButtonProps } from "./Button.types";
import React from "react";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Click Me",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Can’t Click",
  disabled: true,
};
