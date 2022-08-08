import styled, { css } from 'styled-components'

interface ContainerProps {
  isVisible: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, isVisible }) => css`
    width: 100%;
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;

    z-index: 9999;

    background: ${theme.colors.base_tilte}50;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.6rem;

    transition: all 0.2s ease;

    ${!isVisible &&
    css`
      opacity: 0;
      display: none;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};

    width: 100%;
    max-width: 56rem;
    /* height: 20rem; */

    padding: 1.6rem;
    border-radius: 0.8rem;
    box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.6rem;

    div {
      flex: 1;

      strong {
        font: ${theme.fonts.title_s};
        color: ${theme.colors.base_tilte};
      }

      p {
        font: ${theme.fonts.text_regular_s};
        max-width: 36rem;
      }
    }
  `}
`

export const Form = styled.form`
  margin-top: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;

  button {
    max-width: 12rem;
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;

    button {
      max-width: 100%;
    }
  }
`
