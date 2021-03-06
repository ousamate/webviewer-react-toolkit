import classnames from 'classnames';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { useAccessibleFocus } from '../../hooks';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Sets the visual appearance of the button.
   * @default "default"
   */
  buttonStyle?: 'default' | 'borderless' | 'outline';
  /**
   * Sets the size of the button.
   * @default "default"
   */
  buttonSize?: 'small' | 'default' | 'large';
  /**
   * Defaults to 'button' instead of 'submit' to prevent accidental submissions.
   * @default "button"
   */
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ buttonStyle = 'default', buttonSize = 'default', type = 'button', className, children, ...buttonProps }, ref) => {
    const isUserTabbing = useAccessibleFocus();

    const buttonClass = classnames(
      'ui__base ui__button',
      `ui__button--style-${buttonStyle}`,
      `ui__button--size-${buttonSize}`,
      {
        'ui__button--disabled': buttonProps.disabled,
        'ui__button--tabbing': isUserTabbing,
      },
      className,
    );

    return (
      <button {...buttonProps} className={buttonClass} type={type} ref={ref}>
        <div className="ui__button__internal">{children}</div>
      </button>
    );
  },
);
