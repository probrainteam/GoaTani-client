import { forwardRef } from 'react';
import styled from 'styled-components';

type BadgeColorScheme = 'primary' | 'lighten' | 'darken';

interface BadgeProps {
  children: React.ReactNode;
  onClick?: () => void;

  colorScheme?: BadgeColorScheme;
}

const BadgeCore = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const { children, onClick, ...rest } = props;

  return (
    <div ref={ref} onClick={onClick} {...rest}>
      {children}
    </div>
  );
});

BadgeCore.displayName = 'BadgeCore';

const Badge = styled(BadgeCore)`
  padding: 5px 12px;
  border-radius: 7px;

  cursor: pointer;
  ${({ colorScheme = 'primary', theme }) => {
    if (colorScheme === 'lighten') {
      return `
        background-color: ${theme.colors[colorScheme][200]};
        color: ${theme.colors.white};
        &:hover {
            background-color: ${theme.colors[colorScheme][300]};
        }
        &:active {
          background-color: ${theme.colors[colorScheme][300]};
        }
      `;
    }
    return `
      background-color: ${theme.colors[colorScheme][100]};
      color: ${theme.colors.white};

      &:hover {
          background-color: ${theme.colors[colorScheme][200]};
      }
      &:active {
        background-color: ${theme.colors[colorScheme][300]};
      }
    `;
  }};
`;

export default Badge;
