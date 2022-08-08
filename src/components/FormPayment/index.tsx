import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import theme from '../../styles/theme'
import { Input } from '../Input'
import {
  Form,
  Group,
  GroupInputs,
  Payment,
  PaymentGroup,
  SelectPayment,
} from './styles'

export function FormPayment() {
  return (
    <>
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
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
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
    </>
  )
}
