import { ButtonSizeType } from '@/components/button';
import { Icon, IconName } from '@/components/icon';
import { ComponentProps, forwardRef } from 'react';
import styled from 'styled-components';

type ButtonProps = ComponentProps<'button'>;
type IconButtonVariant = 'solid' | 'outline';
type IconButtonColorScheme = 'primary';
type IconButtonSizeType = ButtonSizeType;

interface IconButtonProps extends ButtonProps {
  name: IconName;
  variant?: IconButtonVariant;
  colorScheme?: IconButtonColorScheme;
  size?: IconButtonSizeType;
}

const iconSize = {
  lg: 28,
  md: 24,
  sm: 20,
  xs: 16,
};

const IconButtonCore = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { name, size = 'md', onClick, ...rest } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!onClick) return;
    e.stopPropagation();
    onClick(e);
  };

  return (
    <button ref={ref} onClick={handleClick} {...rest}>
      <Icon name={name} size={iconSize[size]} />
    </button>
  );
});

IconButtonCore.displayName = 'IconButtonCore';

export const IconButton = styled(IconButtonCore)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 5px;

  background-color: transparent;

  ${({ variant, colorScheme = 'primary', theme }) => {
    if (variant === 'solid') {
      return `
        background-color: ${theme.colors[colorScheme][100]};
        border: 1px solid ${theme.colors[colorScheme][100]};
        color: ${theme.colors.white};
        &:hover {
          background-color: ${theme.colors[colorScheme][200]};
          border: 1px solid ${theme.colors[colorScheme][200]};
        }
        &:active {
          background-color: ${theme.colors[colorScheme][300]};
          border: 1px solid ${theme.colors[colorScheme][300]};
        }
        `;
    }

    if (variant === 'outline') {
      return `
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
  }}

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
