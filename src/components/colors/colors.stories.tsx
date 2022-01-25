import { ComponentStory, ComponentMeta } from '@storybook/react';
import { cp } from 'fs';
import { Typography } from '../typography/typography';
import { ColorsArray } from './colors';
import styles from './colors.module.css';

const ColorsDivs = () => {
  return (
    <div className={styles['color-container']}>
      {ColorsArray.map((color, idx) => (
        // eslint-disable-next-line react/jsx-key
        <div
          className={styles['color-display']}
          style={{ backgroundColor: color.hexString }}
        >
          <Typography
            variant="h6"
            style={{
              marginTop: '0rem',
              marginBottom: '0rem',
              paddingTop: '1.5rem',
              paddingLeft: '0.5rem',
              color: idx > 3 && idx < 10 ? '#111111' : '#fff',
            }}
          >
            {color.type} / {color.hexString}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Components/Colors',
  component: ColorsDivs,
  argTypes: {},
} as ComponentMeta<typeof ColorsDivs>;

const Template: ComponentStory<typeof ColorsDivs> = (args) => <ColorsDivs />;

export const ColorsDemo = Template.bind({});
ColorsDemo.args = {
  shadowType: 'default',
};
