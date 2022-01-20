import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {},
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const CustomRadioButton = Template.bind({});
CustomRadioButton.args = {};
