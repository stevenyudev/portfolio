import type { IInputProps } from '@/models/inputProps.model';
import InputContainer from '@/components/UI/InputContainer';
import styles from '@/styles/input.module.css';

/**
 * A Textarea component that can be used to input
 * multi-line text data.
 *
 * @param {IInputProps} props - The props to pass to the
 * component. This should include the inputProps from React
 * Hook Form and any other required props.
 *
 * @returns {JSX.Element} - The Textarea component.
 */
const Textarea = (props: IInputProps) => {
  return (
    <InputContainer {...props}>
      <textarea
        {...props.inputProps}
        className={`${styles['input-field']} ${props.error?.message ? styles['input-field-error'] : ''}`}
        rows={10}
        id={`input-${props.inputProps.name}`}
      />
    </InputContainer>
  );
};

export default Textarea;
