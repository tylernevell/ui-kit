import React, { forwardRef, useEffect, useState } from 'react';
import { Shadow } from '../shadows/shadow';
import { Typography } from '../typography/typography';
import styles from './input.module.css';

/*
  TODO:
    1. Make input passable to other components and APIs
    2. Add AriaLabels
    3. Style for Success and Autofill
*/

interface InputProps {
  label: string;
  id: string;
  name: string;
  validationFunction: (value: string) => boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, id, name, validationFunction } = props;

  const [enteredValue, setEnteredValue] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const [formIsEntered, setFormIsEntered] = useState(false);
  const [isNotTouchedYet, setIsNotTouchedYet] = useState(true);

  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  const focusHandler = () => {
    setIsNotTouchedYet(false);
  };

  const validationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormIsEntered(true);
    setFormIsValid(validationFunction(e.target.value));
  };

  return (
    <Shadow shadowType={formIsValid === formIsEntered ? 'default' : 'error'}>
      <div className={styles.input}>
        <label htmlFor={id} className={styles.input}>
          <Typography
            variant={isNotTouchedYet ? 'p2' : 'p3'}
            style={
              isNotTouchedYet
                ? { marginBottom: '0' }
                : { marginTop: '0.31rem', marginBottom: '0.06rem' }
            }
          >
            {label}
          </Typography>
          <input
            type="text"
            ref={ref}
            id={id}
            name={name}
            value={enteredValue}
            onChange={valueChangeHandler}
            onFocus={focusHandler}
            onBlur={validationHandler}
            className={styles.textfield}
          />
        </label>
      </div>
    </Shadow>
  );
});

Input.displayName = 'Input';

export { Input };
