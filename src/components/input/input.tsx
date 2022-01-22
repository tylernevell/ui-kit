import React, { forwardRef, useEffect, useState } from 'react';
import { Shadow } from '../shadows/shadow';
import { Typography } from '../typography/typography';
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
  validationFunction: (value: string) => boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, placeholder, id, name, validationFunction } = props;

  const [enteredValue, setEnteredValue] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const [formIsEntered, setFormIsEntered] = useState(false);

  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  const focusHandler = () => {
    setFormIsEntered(false);
  };

  const validationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormIsValid(validationFunction(e.target.value));
    setFormIsEntered(true);
  };

  return (
    <Shadow shadowType={formIsValid === formIsEntered ? 'default' : 'error'}>
      <div>
        <label htmlFor={id}>
          <Typography variant={formIsEntered ? 'p3' : 'p2'}>{label}</Typography>
        </label>
        <input
          type="text"
          ref={ref}
          id={id}
          name={name}
          value={enteredValue}
          placeholder={placeholder}
          onChange={valueChangeHandler}
          onFocus={focusHandler}
          onBlur={validationHandler}
          className={styles.textfield}
        />
      </div>
    </Shadow>
  );
});

Input.displayName = 'Input';

export { Input };
