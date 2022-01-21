import { forwardRef } from 'react';
import styles from './radio.module.css';

/*
  TODO:
    1. Add and fix disabled CSS class
    2. Add typography for name
*/

interface RadioProps {
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  ariaChecked?: boolean;
  // onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  onChange?: (event: React.ChangeEvent) => void;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    name = 'Text',
    value = 'text',
    checked,
    disabled,
    ariaChecked = false,
    // onClick,
    onChange,
  } = props;

  return (
    <label htmlFor={value} aria-labelledby="gdesc1" className={styles.radio}>
      <input
        type="radio"
        id={value}
        ref={ref}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        aria-checked={ariaChecked}
        // onClick={onClick}
        onChange={onChange}
      />
      {name}
    </label>
  );
});

Radio.displayName = 'Radio';

export { Radio };
