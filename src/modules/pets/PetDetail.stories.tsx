import type { Meta, StoryObj } from '@storybook/react';
import { PetDetail } from './PetDetail';
import cuteDog from '../images/cuteDog.jpg'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'PetDetail',
  component: PetDetail,
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
} satisfies Meta<typeof PetDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SamplePet: Story = {
  args: {
    title: 'Some Dog',
    description: 'This dog is cute',
    imgSrc: cuteDog,
  },
};
