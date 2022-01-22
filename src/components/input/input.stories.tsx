import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Inputs = Template.bind({});
Inputs.args = {
  validationFunction: (value: string) => value.length > 8,
  label: 'Name > 8 Chars',
  placeholder: 'Name > 8 chars',
};
