import React, { forwardRef } from 'react';
import { enforceA11y } from '../../utils/a11y/enforceA11y';
import { StyledButton } from './Button.styles';
import type { ButtonProps } from './Button.types';


const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref): React.ReactElement => {
    const {
      type = 'button',
      children,
      variant = 'primary',
      className,
      disabled = false,
      iconOnly,
      label,
      useGradient = false,
      ...rest
    } = props;

    enforceA11y('Button', [
      {
        condition: !!iconOnly && !label,
        message: '`label` is required when `iconOnly` is true',
      }// TODO: Need to add more for aria-label and etc
    ]);

    return (
      <StyledButton
        aria-label={label}
        type={type}
        variant={variant}
        ref={ref}
        disabled={disabled}
        useGradient={useGradient}
        className={`a11yui-btn ${variant} ${className}`}
        {...rest}
      >
        {children}
      </StyledButton>
    );
  }
);

// TODO: Remove once complete
Button.displayName = 'Button';

export default Button;
