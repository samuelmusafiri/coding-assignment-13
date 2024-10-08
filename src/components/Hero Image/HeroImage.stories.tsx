import { HeroImage } from './HeroImage';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

export default {
  title: 'Hero Image',
  component: HeroImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' }
  }
} as Meta<typeof HeroImage>;

const Template: StoryFn<typeof HeroImage> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/800x300',
  alt: 'Hero Image',
  backgroundColor: '#ffffff',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/800x300',
  alt: 'Disabled Hero Image',
  backgroundColor: '#f5f5f5',
  disabled: true,
};
