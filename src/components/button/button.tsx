import { AriaAttributes, forwardRef } from 'react';
import styles from './button.module.css';

/*
  TODO:
    1. Add on Loader css and functionality
    2. change size styling. kinda not great rn. Consider getting rid of it
    3. Add monochrome button
*/

interface ButtonProps {
  type: 'submit' | 'button' | 'reset';
  buttonType?: 'primary' | 'secondary' | 'flat';
  // | 'secondary-white'
  // | 'primary-white'
  // | 'flat-white'
  // | 'secondary-dark';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  // labelType?: 'label' | 'label-icon' | 'icon' | 'icon-circle';
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
    size = 'medium',
    label = 'Button',
    // labelType = 'label',
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
      id={id}
      key={id}
      ref={ref}
      name={name}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHasPopup}
      onClick={onClick}
      onKeyPress={onClick}
      data-toggle={dataToggle}
      data-action={dataAction}
      data-id={dataId}
      data-review={dataReview}
      className={`${styles.button} ${styles[size]} ${styles[buttonType]}`}
    >
      {label}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
