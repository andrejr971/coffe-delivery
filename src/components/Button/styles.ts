import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

interface ContainerProps {
  variant: 'primary' | 'secondary'
  size: 'full' | 'small'
}

const containerModifiers = {
  small: () => css`
    padding: 8px;
  `,
  full: () => css`
    width: 100%;
  `,
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.purple_dark};

    transition: all 0.2s ease-in;

    &:hover {
      background: ${darken(0.1, theme.colors.purple_dark)};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.yellow};

    transition: all 0.2s ease-in;

    &:hover {
      background: ${darken(0.1, theme.colors.yellow)};
    }
  `,
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, size, variant }) => css`
    border-radius: 6px;
    border: 0;
    color: ${theme.colors.white};

    line-height: 0;

    ${containerModifiers[size]};
    ${containerModifiers[variant](theme)};
  `}
`
