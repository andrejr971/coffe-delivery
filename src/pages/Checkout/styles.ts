import { darken } from 'polished'
import styled, { css } from 'styled-components'

interface SelectPaymentProps {
  active?: true
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  margin-top: 4rem;
  padding: 1.6rem;

  ${({ theme }) => css`
    h2 {
      font: ${theme.fonts.title_xs};
      color: ${theme.colors.base_subtitle};

      margin-bottom: 1.6rem;
    }
  `}

  display: grid;
  grid-template-columns: 64rem 1fr;
  gap: 3.2rem;

  @media screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const AddressAside = styled.aside`
  ${({ theme }) => css`
    width: 100%;

    header {
      display: flex;
      gap: 0.8rem;

      strong {
        color: ${theme.colors.base_subtitle};
        font: ${theme.fonts.text_regular_m};
      }

      p {
        color: ${theme.colors.base_text};
        font: ${theme.fonts.text_regular_s};
      }
    }
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    padding: 3.2rem;
    background: ${theme.colors.base_card};
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  `}
`

export const GroupInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  width: 100%;
`

export const Group = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Payment = styled.div`
  ${({ theme }) => css`
    margin-top: 1.6rem;

    width: 100%;
    padding: 3.2rem;
    background: ${theme.colors.base_card};
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  `}
`

export const PaymentGroup = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 1.6rem;

  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
`

export const SelectPayment = styled.button<SelectPaymentProps>`
  ${({ theme, active }) => css`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.2rem;

    padding: 16px;
    height: 5.6rem;

    border-radius: 6px;

    border: 1px solid ${theme.colors.base_button};
    background: ${theme.colors.base_button};

    color: ${theme.colors.base_text};
    text-transform: uppercase;
    font: ${theme.fonts.button_s};

    transition: all 0.2s ease;

    &:hover {
      background: ${darken(0.1, theme.colors.base_button)};
    }

    ${active &&
    css`
      background: ${theme.colors.purple_light};
      border-color: ${theme.colors.purple};

      &:hover {
        background: ${darken(0.1, theme.colors.purple_light)};
      }
    `}
  `}
`

export const CartAside = styled.aside``
