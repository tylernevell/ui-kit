import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from './typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {},
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <>
    <Typography {...args} />
    <Typography {...args} variant="h1">
      3.5rem/4rem H1 Bold Montserrat
    </Typography>
    <Typography {...args} variant="h2">
      3rem/3.5rem H2 Bold Montserrat
    </Typography>
    <Typography {...args} variant="h3">
      2.5rem/3rem H3 Bold Montserrat
    </Typography>
    <Typography {...args} variant="h4">
      2rem/2.5rem H4 Bold Montserrat
    </Typography>
    <Typography {...args} variant="h5">
      1.5rem/2rem H5 Bold Montserrat
    </Typography>
    <Typography {...args} variant="h6">
      1.25rem/1.75rem H6 Bold Montserrat
    </Typography>
    <Typography {...args} variant="h6">
      1.25rem/1.75rem H6 Bold Montserrat
    </Typography>
    <Typography {...args} variant="p1">
      1.25rem/1.75rem P1 Regular Roboto
    </Typography>
    <Typography {...args} variant="p1" bold={true}>
      1.25rem/1.75rem P1 Bold Roboto
    </Typography>
    <Typography {...args} variant="p2">
      1rem/1.5rem P2 Regular Roboto
    </Typography>
    <Typography {...args} variant="p2" bold={true}>
      1rem/1.5rem P2 Bold Roboto
    </Typography>
    <Typography {...args} variant="p3">
      0.8125rem/1.25rem P3 Regular Roboto
    </Typography>
    <Typography {...args} variant="p3" bold={true}>
      0.8125rem/1.25rem P3 Bold Roboto
    </Typography>
  </>
);

export const TypographyExamples = Template.bind({});
TypographyExamples.args = {
  children: 'Typography',
  variant: 'h4',
};
