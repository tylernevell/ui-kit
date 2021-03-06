import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <>
    <Button {...args} />
    <br />
    <Button buttonType="secondary" size="medium" type="button" />
    <br />
    <Button buttonType="flat" size="medium" type="button" />
  </>
);

export const CustomButton = Template.bind({});
CustomButton.args = {
  type: 'button',
  buttonType: 'primary',
  size: 'medium',
  label: 'Button',
};
