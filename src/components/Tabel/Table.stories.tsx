import { Table } from './Table';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    headers: { control: 'object' },  // Use 'object' for array-like controls
    rows: { control: 'object' },  // Use 'object' for array-like controls
    backgroundColor: { control: 'color' },  // Control for background color
    disabled: { control: 'boolean' }  // Control to toggle disabled state
  }
} as Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headers: ['Full Name', 'date of birth And place of birth'],
    rows: [['Abubakar , Abdulai', '1st june, 2023,  Kumasi'], ['Issah, Nuhu', '1st  December, 2001,  Kumasi']],
    backgroundColor: '#ffffff',
    disabled: false,
  }
};

export const Disabled: Story = {
  args: {
    headers: ['Header 1', 'Header 2'],
    rows: [['Row 1, Cell 1', 'Row 1, Cell 2'], ['Row 2, Cell 1', 'Row 2, Cell 2']],
    backgroundColor: '#f5f5f5',
    disabled: true,
  }
};
