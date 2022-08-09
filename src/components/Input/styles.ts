import styled, { css } from 'styled-components'

interface ContainerProps {
  width?: string
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, width }) => css`
    display: flex;
    align-items: center;

    background: ${theme.colors.base_input};
    font: ${theme.fonts.text_regular_s};

    padding: 1.2rem;
    border: 1px solid ${theme.colors.base_button};
    border-radius: 4px;

    width: ${width || '100%'};

    input {
      color: ${theme.colors.base_text};
      flex: 1;
      background: transparent;
      border: 0;

      width: ${width || '100%'};
    }

    span {
      color: ${theme.colors.base_label};
      font-style: italic;
    }

    transition: all 0.2s ease;

    &:focus-within {
      border-color: ${theme.colors.yellow};
    }

    @media screen and (max-width: 960px) {
      width: 100%;

      input {
        width: 100%;
      }
    }
  `}
`
