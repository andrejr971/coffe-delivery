import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Button } from '../../components/Button'
import { FormPayment } from '../../components/FormPayment'
import { Input } from '../../components/Input'
import { ItemCart } from '../../components/ItemCart'
import { useCart } from '../../hooks/useCart'
import { productsService } from '../../services/products'
import theme from '../../styles/theme'

import {
  AddressAside,
  CartAside,
  CartList,
  Container,
  Content,
  Details,
  ItemDetail,
  Total,
} from './styles'

export function Checkout() {
  const { cart, totalProducts } = useCart()

  return (
    <Container>
      <AddressAside>
        <div>
          <h2>Complete seu pedido</h2>

          <FormPayment />
        </div>
      </AddressAside>
      <CartAside>
        <div>
          <h2>Cafés selecionados</h2>

          <Content>
            <CartList>
              {cart && cart.map((item) => <ItemCart key={item.id} {...item} />)}
            </CartList>

            <Details>
              <ul>
                <ItemDetail>
                  <span>Total de itens</span>
                  <strong>
                    {totalProducts &&
                      totalProducts.total.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                        minimumFractionDigits: 2,
                      })}
                  </strong>
                </ItemDetail>
                <ItemDetail>
                  <span>Entrega</span>
                  <strong>R$ 3,50</strong>
                </ItemDetail>
                <Total>
                  <span>Total</span>
                  <strong>
                    {totalProducts &&
                      (totalProducts.total + 3.5).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                        minimumFractionDigits: 2,
                      })}
                  </strong>
                </Total>
              </ul>
            </Details>

            <Button size="full" variant="secondary">
              Confirmar pedido
            </Button>
          </Content>
        </div>
      </CartAside>
    </Container>
  )
}
