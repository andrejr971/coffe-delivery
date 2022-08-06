import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

interface ContainerProps {
  variant: 'primary' | 'secondary' | 'light'
  size: 'full' | 'small'
}

const containerModifiers = {
  small: () => css`
    padding: 8px;
  `,
  full: (theme: DefaultTheme) => css`
    width: 100%;
    padding: 8px;
    height: 4.8rem;
    justify-content: center;

    font: ${theme.fonts.button_l};
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
  light: (theme: DefaultTheme) => css`
    background: ${theme.colors.base_button};
    font: ${theme.fonts.button_s};

    color: ${theme.colors.base_text};

    transition: all 0.2s ease-in;

    &:hover {
      background: ${darken(0.1, theme.colors.base_button)};
    }
  `,
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, size, variant }) => css`
    border-radius: 6px;
    border: 0;
    color: ${theme.colors.white};

    line-height: 0;

    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 0.4rem;

    ${containerModifiers[size](theme)};
    ${containerModifiers[variant](theme)};
  `}
`
