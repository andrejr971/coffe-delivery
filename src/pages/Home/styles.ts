import styled, { css } from 'styled-components'

export const Hero = styled.section`
  position: relative;
  margin-top: 0;
`

export const Background = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;

  z-index: -1;

  img {
    width: 100%;
  }

  @media screen and (max-width: 1080px) {
    img {
      height: 108rem;

      object-fit: cover;
    }
  }
`

export const ContentHero = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 1.6rem;

  margin: 0 auto;

  padding-top: 6.4rem;

  display: grid;
  grid-template-columns: 58.8rem 1fr;
  gap: 5.6rem;

  img {
    width: 100%;
  }

  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      max-width: 56rem;
    }

    h1,
    p {
      text-align: center;
    }
  }
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font: ${theme.fonts.title_xl};
    color: ${theme.colors.base_tilte};
  `}
`

export const Subtitle = styled.p`
  ${({ theme }) => css`
    margin-top: 1.6rem;
    font: ${theme.fonts.text_regular_l};
    color: ${theme.colors.base_subtitle};
  `}
`

export const Informations = styled.ul`
  margin-top: 6.6rem;

  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 2rem 4rem;
`

export const Information = styled.li`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

export const Container = styled.main``
