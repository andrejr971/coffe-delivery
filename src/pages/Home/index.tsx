import BackgroundImage from '../../assets/Background.svg'
import CoffeeImage from '../../assets/Hero.png'

import {
  Background,
  Container,
  ContentHero,
  Grid,
  Hero,
  Information,
  Informations,
  Subtitle,
  Title,
  Title2,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import theme from '../../styles/theme'
import { BadgeIcon } from '../../components/BadgeIcon'
import { productsService } from '../../services/products'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <>
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
        <Title2>Nossos cafés</Title2>

        <Grid>
          {productsService.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </Grid>
      </Container>
    </>
  )
}
