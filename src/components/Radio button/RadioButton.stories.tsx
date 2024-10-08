import { RadioButton } from './RadioButton';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export default {
  title: 'Radio Button',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' }
  }
} as Meta<typeof RadioButton>;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    disabled: false,
  }
};

export const Disabled: Story = {
  args: {
    label: 'Option 1',
    disabled: true,
  }
};
