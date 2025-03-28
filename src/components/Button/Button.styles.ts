import styled from 'styled-components';
import { theme } from '../../tokens/themes';
import { ButtonVariant } from './Button.types';

export const StyledButton = styled.button<{
  variant: ButtonVariant;
  useGradient?: boolean;
}>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: ${({ variant }) => theme.colors[variant].borderRadius};
  color: ${({ variant }) => theme.colors[variant].text}; 
  box-shadow: ${({ variant }) => theme.colors[variant].shadow};
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.3s ease,
    transform 0.15s ease,
    box-shadow 0.3s ease;

  background: ${({ variant, useGradient }) =>
    useGradient
      ? `linear-gradient(to bottom, ${theme.colors[variant].gradient[0]}, ${theme.colors[variant].gradient[1]})`
      : theme.colors[variant].base};

  &:hover {
    background: ${({ variant, useGradient }) =>
      useGradient
        ? `linear-gradient(to bottom, ${theme.colors[variant].gradient[1]}, ${theme.colors[variant].gradient[0]})`
        : theme.colors[variant].hover};
    transform: translateY(-2px);
    box-shadow: ${({ variant }) => `0 6px 20px ${theme.colors[variant].shadow.replace('0 4px 12px', 'rgba')}`};
  }

  &:focus-visible {
    outline: 2px solid ${({ variant }) => theme.colors[variant].focus};
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
    background: ${({ variant }) => theme.colors[variant].active};
    transition: transform 0.1s ease-out;
    transform: scale(0.96) translateY(1px);
  }

  &:disabled {
    background: ${({ variant }) => theme.colors[variant].disabled};
    color: ${({ variant }) => theme.colors[variant].text};
    cursor: not-allowed;
    opacity: 0.6;
    transform: none;
    box-shadow: none;
  }
`;
