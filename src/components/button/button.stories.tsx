import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const CustomButton = Template.bind({});
CustomButton.args = {
  buttonType: 'primary',
  size: 'medium',
  label: 'Button',
};
