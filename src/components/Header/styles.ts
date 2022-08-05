import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

export const Container = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;

  z-index: 999;

  ${({ theme }) => css`
    background: ${theme.colors.background};
  `}
`

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3.2rem 1.6rem;
`

export const GroupButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`

export const ButtonLocation = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.purple_light};
    border: 0;
    border-radius: 6px;

    color: ${theme.colors.purple_dark};
    display: flex;
    align-items: center;
    gap: 0.4rem;

    padding: 8px;

    font: ${theme.fonts.text_regular_s};

    transition: all 0.2s ease;

    &:hover {
      background: ${darken(0.1, theme.colors.purple_light)};
    }
  `}
`

export const ButtonCart = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.yellow_light};
    border: 0;
    border-radius: 6px;

    color: ${theme.colors.yellow_dark};
    display: flex;
    align-items: center;
    gap: 0.4rem;

    padding: 8px;

    font: ${theme.fonts.text_regular_s};

    transition: all 0.2s ease;

    &:hover {
      background: ${darken(0.1, theme.colors.yellow_dark)};
    }
  `}
`

export const Badge = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.yellow_dark};
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
      background: ${lighten(0.1, theme.colors.yellow_dark)};
    }

    position: absolute;
    top: -8px;
    right: -8px;
  `}
`

export const Cart = styled.div`
  position: relative;
`
