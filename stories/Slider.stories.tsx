import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Slider from '@mui/material/Slider';

export default {
  title: 'Slider',
  component: Slider,
  argTypes: {}
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  defaultValue: 30,
  'arial-label': 'Default',
  color: 'primary'
}