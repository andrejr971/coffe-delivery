import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Button } from '../../components/Button'
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
  Form,
  Group,
  GroupInputs,
  ItemDetail,
  Payment,
  PaymentGroup,
  SelectPayment,
  Total,
} from './styles'

export function Checkout() {
  const { productsCart } = useCart()

  return (
    <Container>
      <AddressAside>
        <div>
          <h2>Complete seu pedido</h2>

          <Form>
            <header>
              <MapPinLine color={theme.colors.yellow} size={24} />
              <div>
                <strong>Endereço de Entrega</strong>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>

            <GroupInputs>
              <Input name="codezip" placeholder="CEP" width="20rem" />
              <Input name="address" placeholder="Rua" />

              <Group>
                <Input name="number" placeholder="Número" width="20rem" />
                <Input name="complement" placeholder="Complemento" optional />
              </Group>

              <Group>
                <Input name="district" placeholder="Bairro" width="20rem" />
                <Input name="city" placeholder="Cidade" />
                <Input name="state" placeholder="UF" width="6.4rem" />
              </Group>
            </GroupInputs>
          </Form>

          <Payment>
            <header>
              <CurrencyDollar color={theme.colors.purple} size={24} />
              <div>
                <strong>Pagamento</strong>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>

            <PaymentGroup>
              <SelectPayment active>
                <CreditCard color={theme.colors.purple} size={16} />
                <span>Cartão de crédito</span>
              </SelectPayment>

              <SelectPayment>
                <Bank color={theme.colors.purple} size={16} />
                <span>cartão de débito</span>
              </SelectPayment>

              <SelectPayment>
                <Money color={theme.colors.purple} size={16} />
                <span>Dinheiro</span>
              </SelectPayment>
            </PaymentGroup>
          </Payment>
        </div>
      </AddressAside>
      <CartAside>
        <div>
          <h2>Cafés selecionados</h2>

          <Content>
            <CartList>
              {productsCart &&
                productsCart.map((item) => (
                  <ItemCart key={item.id} {...item} />
                ))}
            </CartList>

            <Details>
              <ul>
                <ItemDetail>
                  <span>Total de itens</span>
                  <strong>R$ 29,70</strong>
                </ItemDetail>
                <ItemDetail>
                  <span>Entrega</span>
                  <strong>R$ 3,50</strong>
                </ItemDetail>
                <Total>
                  <span>Total</span>
                  <strong>R$ 33,20</strong>
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
