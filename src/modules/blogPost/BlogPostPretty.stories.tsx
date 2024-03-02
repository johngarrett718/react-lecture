import type { Meta, StoryObj } from '@storybook/react';

import { BlogPostPretty } from './BlogPostPretty';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'BlogPostPretty',
  component: BlogPostPretty,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof BlogPostPretty>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Unverified: Story = {
  args: {
    title: 'Flight to Chicago',
    body: 'Arrested by Security',
    date: new Date(),
  },
};

export const Verified: Story = {
  args: {
    title: 'Flight to Chicago',
    body: 'Arrested by Security',
    date: new Date(),
    verified: true,
  },
};