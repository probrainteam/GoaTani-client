import { ComponentProps, forwardRef } from 'react';
import styled from 'styled-components';

export type ButtonSizeType = 'lg' | 'md' | 'sm' | 'xs';
type ButtonColorSchemeType = 'primary' | 'lighten' | 'darken';
type ButtonVariantType = 'solid' | 'outline';

const buttonSize: Record<ButtonSizeType, number> = {
  lg: 60,
  md: 50,
  sm: 40,
  xs: 30,
};

interface ButtonProps extends ComponentProps<'button'> {
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  colorScheme?: ButtonColorSchemeType;
}

const ButtonCore = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, onClick, ...rest } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!onClick) return;
    e.stopPropagation();
    onClick(e);
  };

  return (
    <button ref={ref} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
});

ButtonCore.displayName = 'ButtonCore';

const Button = styled(ButtonCore)`
  cursor: pointer;
  width: 100%;
  height: ${({ size = 'md' }) => buttonSize[size]}px;
  border-radius: 10px;

  ${({ variant, theme, colorScheme = 'primary' }) => {
    if (variant === 'outline') {
      return `
        background-color: transparent;
        border: 1px solid ${theme.colors[colorScheme][200]};
        color: ${theme.colors[colorScheme][200]};

        &:hover {
          background-color: ${theme.colors.lighten[100]};
        }
        &:active {
          background-color: ${theme.colors.lighten[200]};
        }
      `;
    }

    return `
        background-color: ${theme.colors[colorScheme][100]};
        border: 1px solid ${theme.colors[colorScheme][100]};
        color: ${theme.colors.white};

        &:hover {
          background-color: ${theme.colors[colorScheme][200]};
        }
        
        &:active {
          background-color: ${theme.colors[colorScheme][300]};
        }
      `;
  }};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Button;
