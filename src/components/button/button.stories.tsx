import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  size: 'medium',
  label: 'Button',
  buttonType: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'medium',
  label: 'Button',
  buttonType: 'secondary',
};

export const Flat = Template.bind({});
Flat.args = {
  size: 'medium',
  label: 'Button',
  buttonType: 'flat',
};
