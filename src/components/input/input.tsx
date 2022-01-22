import React, { forwardRef, useEffect, useState } from 'react';
import { Shadow } from '../shadows/shadow';
import styles from './input.module.css';

/*
  TODO:
    1. Make input passable to other components and APIs
    2. Add AriaLabels
*/

interface InputProps {
  label: string;
  placeholder: string;
  id: string;
  name: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, placeholder, id, name } = props;

  const [enteredValue, setEnteredValue] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(false);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredValue]);

  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  return (
    <Shadow shadowType={formIsValid ? 'default' : 'error'}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={name}
        value={enteredValue}
        placeholder={placeholder}
        onChange={valueChangeHandler}
        className={styles.textfield}
      />
    </Shadow>
  );
});

Input.displayName = 'Input';

export { Input };
