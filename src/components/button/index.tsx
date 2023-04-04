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

function Button({ size = 'md', variant = 'solid', isDisabled }: ButtonProps) {
    if (variant === 'outline') {
    }
    return (
        <SolidButton size={size} disabled={isDisabled}>
            SolidButton
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
        background-color: rgba(255, 94, 91, 0.5);
        border: none;
    }
`
`
