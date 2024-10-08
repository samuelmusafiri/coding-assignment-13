import { Text } from './Text';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' }
  }
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content: 'This is a text',
    color: '#000000',
    disabled: false,
  }
};

export const Disabled: Story = {
  args: {
    content: 'This text is disabled',
    color: '#666666',
    disabled: true,
  }
};
