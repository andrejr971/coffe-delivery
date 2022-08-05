import styled, { css } from 'styled-components'

interface ContainerProps {
  color: 'purple' | 'yellow_dark' | 'yellow' | 'gray'
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, color }) => css`
    width: 3.2rem;
    height: 3.2rem;

    border-radius: 1.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${color === 'gray'
      ? theme.colors.base_text
      : theme.colors[color]};
  `}
`
