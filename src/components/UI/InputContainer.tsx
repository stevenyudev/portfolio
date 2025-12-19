import type { IInputContainerProps } from '@/models/inputProps.model';
import styles from '@/styles/input.module.css';

/**
 * InputContainer component
 *
 * This component renders a label and an input field with an optional error message.
 * It also adds an asterisk to the label if the input field is required.
 *
 * @param {ReactNode} children - The input field to be rendered.
 * @param {string} label - The label for the input field.
 * @param {IInputProps} inputProps - The props for the input field.
 * @param {FieldError | undefined} error - The error message for the input field.
 * @param {boolean} [required=false] - Whether the input field is required.
 * @returns {JSX.Element} - The InputContainer component with the provided children and props.
 */
const InputContainer = ({
  children,
  label,
  inputProps,
  error,
  required = false,
}: IInputContainerProps) => {
  return (
    <div className="flex flex-column">
      {/* Label */}
      <label
        htmlFor={`input-${inputProps.name}`}
        className={styles['input-label']}
      >{`${label} ${required ? '*' : ''}`}</label>

      {/* Input field */}
      {children}

      {/* Error message */}
      {error?.message && (
        <p className={styles['input-error']}>{error?.message}</p>
      )}
    </div>
  );
};

export default InputContainer;
