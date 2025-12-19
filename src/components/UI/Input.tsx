import type { IInputProps } from '@/models/inputProps.model';
import InputContainer from '@/components/UI/InputContainer';
import styles from '@/styles/input.module.css';

/**
 * A reusable input component that can be used to create form
 * inputs. It takes the standard react-hook-form input
 * props and an optional error message to display if the
 * input is invalid.
 * @param {IInputProps} props - The props to pass to the
 * input component.
 * @returns {JSX.Element} - A JSX element representing the
 * input component.
 */
const Input = (props: IInputProps) => {
  return (
    <InputContainer {...props}>
      <input
        {...props.inputProps}
        className={`${styles['input-field']} ${props.error?.message ? styles['input-field-error'] : ''}`}
        id={`input-${props.inputProps.name}`}
      />
    </InputContainer>
  );
};

export default Input;
