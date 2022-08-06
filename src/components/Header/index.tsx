import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import LogoImg from '../../assets/Logo.svg'
import { useCart } from '../../hooks/useCart'
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
  const { cart } = useCart()

  return (
    <Container>
      <Content>
        <NavLink to="/">
          <img src={LogoImg} alt="Logo Coffee Delivery" />
        </NavLink>

        <GroupButtons>
          <ButtonLocation>
            <MapPin color={theme.colors.purple} weight="fill" size={24} />
            <span>São Roque, SP</span>
          </ButtonLocation>

          <Cart>
            <ButtonCart to="/checkout">
              <ShoppingCart
                color={theme.colors.yellow_dark}
                weight="fill"
                size={24}
              />
            </ButtonCart>

            {cart && cart.length > 0 && <Badge>{cart.length}</Badge>}
          </Cart>
        </GroupButtons>
      </Content>
    </Container>
  )
}
