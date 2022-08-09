import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;

  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  margin-top: 8rem;
  padding: 1.6rem;
  align-items: flex-end;
  justify-content: space-between;

  img {
    width: 100%;
    max-width: 49rem;
  }

  flex-wrap: wrap;

  gap: 3.2rem;

  ${({ theme }) => css`
    h2 {
      font: ${theme.fonts.title_l};
      color: ${theme.colors.yellow_dark};
    }

    p {
      font: ${theme.fonts.text_regular_l};
      color: ${theme.colors.base_subtitle};
    }
  `}

  @media screen and (max-width: 1080px) {
    justify-content: center;
    margin-top: 2rem;
  }
`

export const Informations = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    margin-top: 4rem;

    width: 100%;
    max-width: 52rem;
    padding: 4rem;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    border: 1px solid transparent;
    background: linear-gradient(
          ${theme.colors.background},
          ${theme.colors.background}
        )
        padding-box,
      linear-gradient(to right, #dbac2c, #8047f8) border-box;
    border-image: linear-gradient(to right, #dbac2c, #8047f8) 1;
    border-radius: 6px 36px 6px 36px;

    li {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      svg {
        color: ${theme.colors.white};
      }

      p {
        flex: 1;
      }
    }
  `}
`
