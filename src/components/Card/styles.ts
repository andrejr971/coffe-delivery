import { darken, lighten } from 'polished'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.base_card};
    border-radius: 6px 36px 6px 36px;
    padding: 2rem;

    display: flex;
    align-items: center;
    flex-direction: column;
  `}
`

export const ImageCoffee = styled.img`
  margin-top: -4rem;
`

export const Title = styled.strong`
  ${({ theme }) => css`
    font: ${theme.fonts.title_s};
    color: ${theme.colors.base_subtitle};
    text-align: center;

    margin-top: 1.6rem;
    margin-bottom: 0.8rem;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font: ${theme.fonts.text_regular_s};
    color: ${theme.colors.base_label};
    text-align: center;
  `}
`

export const Categories = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-top: 1.2rem;
`

export const Tag = styled.span`
  ${({ theme }) => css`
    font: ${theme.fonts.tag};
    color: ${theme.colors.yellow_dark};
    text-align: center;
    text-transform: uppercase;

    background: ${theme.colors.yellow_light};
    padding: 4px 8px;
    border-radius: 16px;
  `}
`

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;

  margin-top: 3.2rem;
`

export const Price = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.base_text};
    display: flex;
    gap: 0.4rem;
    align-items: center;

    span {
      font: ${theme.fonts.text_regular_s};
    }

    strong {
      font: ${theme.fonts.title_m};
    }
  `}
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

export const AmountToCart = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    border-radius: 6px;
    gap: 0.8rem;
    height: 4rem;

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

export const Badge = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.purple};
    border: 0;
    border-radius: 10px;

    width: 2rem;
    height: 2rem;

    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    padding: 8px;

    font: ${theme.fonts.text_bold_s};
    line-height: 0;

    transition: all 0.2s ease;

    &:hover {
      background: ${lighten(0.1, theme.colors.purple)};
    }

    position: absolute;
    top: -8px;
    right: -8px;
  `}
`

export const DivAddCart = styled.div`
  position: relative;
`
