import { darken } from 'polished'
import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  display: flex;

  align-items: flex-start;
  justify-content: space-between;

  img {
    width: 6.4rem;
    height: 6.4rem;
  }

  padding-bottom: 2.4rem;

  border-bottom: 1px solid ${theme.colors.base_button};

  & + div {
    margin-top: 2.4rem;
  }
`

export const Price = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.base_text};
    font: ${theme.fonts.text_bold_m};
  `}
`

export const AmountToCart = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    width: 7.2rem;

    border-radius: 6px;
    gap: 0.8rem;
    height: 3.5rem;

    overflow: hidden;

    background: ${theme.colors.base_button};

    color: ${theme.colors.base_tilte};
    font: ${theme.fonts.text_regular_m};

    span {
      width: 3.2rem;
      height: 100%;
    }

    button {
      background: transparent;
      border: 0;
      width: 2.4rem;
      height: 100%;

      transition: all 0.2s ease;

      &:hover {
        background: ${darken(0.1, theme.colors.base_button)};
      }
    }
  `}
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const Name = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.base_subtitle};
    font: ${theme.fonts.text_regular_m};
  `}
`

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`
