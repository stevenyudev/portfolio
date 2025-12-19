import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import type { ReactNode } from 'react';

export interface IInputProps {
  label: string;
  inputProps: UseFormRegisterReturn;
  error: FieldError | undefined;
  required?: boolean;
}

export interface IInputContainerProps extends IInputProps {
  children: ReactNode;
}
