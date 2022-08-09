import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ImageSuccess from '../../assets/confirmed_order.png'
import { BadgeIcon } from '../../components/BadgeIcon'
import { useCart } from '../../hooks/useCart'

import { Container, Informations } from './styles'

export function Success() {
  const { confirmationOrder } = useCart()

  const navigation = useNavigate()

  useEffect(() => {
    if (!confirmationOrder.address) {
      navigation('/', { replace: true })
    }
  }, [confirmationOrder, navigation])

  return (
    <Container>
      <div>
        <header>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>

        <Informations>
          <li>
            <BadgeIcon>
              <MapPin size={16} weight="fill" />
            </BadgeIcon>

            <p>
              Entrega em{' '}
              <strong>{`${confirmationOrder.address}, ${confirmationOrder.number}`}</strong>
              <br />
              {` ${confirmationOrder.district} - ${confirmationOrder.city}, ${confirmationOrder.state}`}
            </p>
          </li>
          <li>
            <BadgeIcon color="yellow">
              <Timer size={16} weight="fill" />
            </BadgeIcon>

            <p>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </p>
          </li>
          <li>
            <BadgeIcon color="yellow_dark">
              <CurrencyDollar size={16} weight="bold" />
            </BadgeIcon>

            <p>
              Pagamento na entrega
              <br />
              <strong>
                {confirmationOrder.method === 'credit' && 'Cartão de Crédito'}
                {confirmationOrder.method === 'debit' && 'Cartão de Débito'}
                {confirmationOrder.method === 'money' && 'Dinheiro'}
              </strong>
            </p>
          </li>
        </Informations>
      </div>

      <img src={ImageSuccess} alt="Success" />
    </Container>
  )
}
