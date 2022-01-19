import { AriaAttributes, forwardRef } from 'react';
import styles from './button.module.css';

/*
  TODO:
    1. Add on Loader css and functionality
*/

interface ButtonProps {
  type: 'submit' | 'button' | 'reset';
  buttonType?:
    | 'primary'
    | 'primary-white'
    | 'secondary'
    | 'secondary-white'
    | 'flat'
    | 'flat-white'
    | 'secondary-dark';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  labelType?: 'label' | 'label-icon' | 'icon' | 'icon-circle';
  href?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  dataToggle?: string;
  dataAction?: DOMStringMap;
  dataId?: string;
  dataReview?: string;
  ariaLabel?: string;
  ariaHasPopup?: AriaAttributes['aria-haspopup'];
  ariaExpanded?: AriaAttributes['aria-expanded'];
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    type = 'button',
    buttonType = 'primary',
    backgroundColor,
    size = 'medium',
    label = 'Button',
    labelType = 'label',
    href,
    id,
    name,
    disabled,
    dataToggle,
    dataAction,
    dataId,
    dataReview,
    ariaLabel,
    ariaHasPopup,
    ariaExpanded,
    onClick,
  } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.button} ${styles[size]} ${styles[buttonType]}`}
      style={{ backgroundColor }}
    >
      {label}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
