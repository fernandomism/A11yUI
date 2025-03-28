export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'warning' | 'success';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    type?: 'button' | 'submit' | 'reset' ;
    variant?: ButtonVariant;
    iconOnly?: boolean;
    label?: string;
    useGradient?: boolean;
  }  