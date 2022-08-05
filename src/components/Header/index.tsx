import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoImg from '../../assets/Logo.svg'
import theme from '../../styles/theme'

import {
  Badge,
  ButtonCart,
  ButtonLocation,
  Cart,
  Container,
  Content,
  GroupButtons,
} from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Logo Coffee Delivery" />

        <GroupButtons>
          <ButtonLocation>
            <MapPin color={theme.colors.purple} weight="fill" size={24} />
            <span>São Roque, SP</span>
          </ButtonLocation>

          <Cart>
            <ButtonCart href="/">
              <ShoppingCart
                color={theme.colors.yellow_dark}
                weight="fill"
                size={24}
              />
            </ButtonCart>

            <Badge>3</Badge>
          </Cart>
        </GroupButtons>
      </Content>
    </Container>
  )
}
