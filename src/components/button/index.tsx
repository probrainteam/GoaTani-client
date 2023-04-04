import styled from 'styled-components'

type ButtonSizeType = 'lg' | 'md' | 'sm' | 'xs'

const ButtonSize: Record<ButtonSizeType, string> = {
    lg: '60px',
    md: '50px',
    sm: '40px',
    xs: '30px',
}

interface ButtonProps {
    children: React.ReactNode

    size?: ButtonSizeType
    variant?: 'solid' | 'outline'
    isDisabled?: boolean
}

function Button({
    children,
    isDisabled,
    size = 'md',
    variant = 'solid',
}: ButtonProps) {
    if (variant === 'outline') {
        return (
            <OutLineButton size={size} disabled={isDisabled}>
                {children}
            </OutLineButton>
        )
    }

    return (
        <SolidButton size={size} disabled={isDisabled}>
            {children}
        </SolidButton>
    )
}

const ButtonStyled = styled.button<{ size: ButtonSizeType }>`
    width: 100%;
    height: ${({ size }) => ButtonSize[size]};

    border-radius: 10px;
`

const SolidButton = styled(ButtonStyled)`
    background-color: ${({ theme }) => theme.colors.primary[100]};
    border: 1px solid ${({ theme }) => theme.colors.primary[100]};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary[200]};
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.primary[300]};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`

const OutLineButton = styled(ButtonStyled)`
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary[200]};
    color: ${({ theme }) => theme.colors.primary[200]};

    &:hover {
        background-color: rgba(243, 85, 82, 0.1);
    }
    &:active {
        background-color: rgba(243, 85, 82, 0.15);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`

export default Button
