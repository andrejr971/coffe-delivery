import { MapPin, ShoppingCart } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import LogoImg from '../../assets/Logo.svg'
import { LocationData } from '../../contexts/location'
import { useCart } from '../../hooks/useCart'
import { useLocation } from '../../hooks/useLocation'
import theme from '../../styles/theme'
import { ModalLocation } from '../ModalLocation'

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
  const { totalProducts } = useCart()

  const [isVisible, setIsVisible] = useState(false)

  const { location, setLocation, setAddress } = useLocation()

  function handleOpenModal() {
    setIsVisible(true)
  }

  useEffect(() => {
    const storageStageJSON = localStorage.getItem(
      '@coffee-delivery:location-1.0.0',
    )

    if (storageStageJSON) {
      setLocation(storageStageJSON)
      setIsVisible(false)
    } else {
      setLocation('')
      handleOpenModal()
    }
  }, [setLocation])

  useEffect(() => {
    const storageAddressJSON = localStorage.getItem(
      '@coffee-delivery:address-1.0.0',
    )

    if (storageAddressJSON) {
      setAddress(JSON.parse(storageAddressJSON))
    } else {
      setAddress({} as LocationData)
    }
  }, [setAddress])

  return (
    <>
      <Container>
        <Content>
          <NavLink to="/">
            <img src={LogoImg} alt="Logo Coffee Delivery" />
          </NavLink>

          <GroupButtons>
            <ButtonLocation onClick={handleOpenModal}>
              <MapPin color={theme.colors.purple} weight="fill" size={24} />
              <span>{location || '---'}</span>
            </ButtonLocation>

            <Cart>
              <ButtonCart to="/checkout">
                <ShoppingCart
                  color={theme.colors.yellow_dark}
                  weight="fill"
                  size={24}
                />
              </ButtonCart>

              {totalProducts && totalProducts.quantityProducts > 0 && (
                <Badge>{totalProducts.quantityProducts}</Badge>
              )}
            </Cart>
          </GroupButtons>
        </Content>
      </Container>

      <ModalLocation
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </>
  )
}
