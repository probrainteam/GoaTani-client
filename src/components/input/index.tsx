import theme from '@/styles/theme';
import { ComponentProps, ReactNode, forwardRef } from 'react';
import styled from 'styled-components';

//========================== Types ==========================

type InputProps = ComponentProps<'input'>;
type InputVariants = keyof typeof variants;
type InputSize = 'sm' | 'md' | 'lg' | 'xl';

interface InputWrapperProps {
  variant?: InputVariants;
  inputSize?: InputSize;
}

interface InputCoreProps extends InputProps, InputWrapperProps {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}

//======================== Props styles ==========================

const variants = {
  unstyled: {
    border: 'none',
    backgroundColor: 'transparent',
  },
  flushed: {
    borderBottom: `1px solid ${theme.colors.gray[200]}`,
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
  outline: {
    border: `1px solid ${theme.colors.gray[200]}`,
    backgroundColor: `${theme.colors.white}`,
  },
};

const inputSizes = {
  wrapper: {
    sm: {
      padding: '8px 10px',
    },
    md: {
      padding: '10px 12px',
    },
    lg: {
      padding: '12px 14px',
    },
    xl: {
      padding: '14px 16px',
    },
  },
  input: {
    sm: {
      fontSize: '12px',
    },
    md: {
      fontSize: '13px',
    },
    lg: {
      fontSize: '14px',
    },
    xl: {
      fontSize: '15px',
    },
  },
  button: {
    sm: {
      padding: '3px 10px',
      fontSize: '12px',
      right: '3px',
    },
    md: {
      padding: '5px 12px',
      fontSize: '13px',
      right: '4px',
    },
    lg: {
      padding: '7px 14px',
      fontSize: '14px',
      right: '4px',
    },
    xl: {
      padding: '8px 16px',
      fontSize: '15px',
      right: '5px',
    },
  },
};

//==================== Fixed styles / Components ==========================

const InputWrapper = styled.div<InputWrapperProps>`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  position: relative;
  transition: all 0.1s ease-in-out;

  ${({ variant }) => variants[variant || 'outline']}
  ${({ inputSize }) => inputSizes.wrapper[inputSize || 'md']}

  button {
    opacity: 0;
    width: min-content;
    height: min-content;
    position: absolute;
    transition: all 0.1s ease-in-out;

    ${({ inputSize }) => inputSizes.button[inputSize || 'md']}
  }

  :focus-within {
    border-color: ${theme.colors.primary[300]};

    button {
      opacity: 1;
    }
  }
`;

const InputCore = forwardRef<HTMLInputElement, InputCoreProps>((props, ref) => {
  const { variant, leftElement, rightElement, ...rest } = props;
  return (
    <InputWrapper variant={variant} inputSize={rest.inputSize}>
      {leftElement}
      <input ref={ref} {...rest} />
      {rightElement}
    </InputWrapper>
  );
});

InputCore.displayName = 'InputCore';

export const Input = styled(InputCore)`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;

  ${({ inputSize }) => inputSizes.input[inputSize || 'md']}
`;
