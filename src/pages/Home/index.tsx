import { Header } from '../../components/Header'

import BackgroundImage from '../../assets/Background.svg'
import CoffeeImage from '../../assets/Hero.png'

import {
  Background,
  Container,
  ContentHero,
  Hero,
  Information,
  Informations,
  Subtitle,
  Title,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import theme from '../../styles/theme'
import { BadgeIcon } from '../../components/BadgeIcon'

export function Home() {
  return (
    <>
      <Header />

      <Hero>
        <Background>
          <img src={BackgroundImage} alt="background" />
        </Background>
        <ContentHero>
          <div>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Subtitle>

            <Informations>
              <Information>
                <BadgeIcon color="yellow_dark">
                  <ShoppingCart
                    color={theme.colors.background}
                    weight="fill"
                    size={20}
                  />
                </BadgeIcon>
                <span>Compra simples e segura</span>
              </Information>

              <Information>
                <BadgeIcon color="gray">
                  <Package
                    color={theme.colors.background}
                    weight="fill"
                    size={20}
                  />
                </BadgeIcon>
                <span>Embalagem mantém o café intacto</span>
              </Information>

              <Information>
                <BadgeIcon color="yellow">
                  <Timer
                    color={theme.colors.background}
                    weight="fill"
                    size={20}
                  />
                </BadgeIcon>
                <span>Entrega rápida e rastreada</span>
              </Information>

              <Information>
                <BadgeIcon>
                  <Coffee
                    color={theme.colors.background}
                    weight="fill"
                    size={20}
                  />
                </BadgeIcon>
                <span>O café chega fresquinho até você</span>
              </Information>
            </Informations>
          </div>

          <img src={CoffeeImage} alt="Image de café" />
        </ContentHero>
      </Hero>

      <Container>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae,
        fugit eaque, facilis quos dolores iure error animi voluptas modi
        molestiae asperiores omnis qui ducimus, aut odit eligendi reprehenderit
        dolor debitis?
      </Container>
    </>
  )
}
