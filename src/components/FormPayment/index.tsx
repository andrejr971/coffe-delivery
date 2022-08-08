import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'

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
  const [selectPayment, setSelectPayment] = useState<
    'credit' | 'debit' | 'money'
  >('credit')

  const { setMethodPayment } = useCart()

  function handleMethodPayment(payment: 'credit' | 'debit' | 'money') {
    setSelectPayment(payment)
    setMethodPayment(payment)
  }

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
          <Input name="zipcode" placeholder="CEP" width="20rem" />
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
          <SelectPayment
            active={selectPayment === 'credit'}
            onClick={() => handleMethodPayment('credit')}
            type="button"
          >
            <CreditCard color={theme.colors.purple} size={16} />
            <span>Cartão de crédito</span>
          </SelectPayment>

          <SelectPayment
            active={selectPayment === 'debit'}
            onClick={() => handleMethodPayment('debit')}
            type="button"
          >
            <Bank color={theme.colors.purple} size={16} />
            <span>cartão de débito</span>
          </SelectPayment>

          <SelectPayment
            active={selectPayment === 'money'}
            onClick={() => handleMethodPayment('money')}
            type="button"
          >
            <Money color={theme.colors.purple} size={16} />
            <span>Dinheiro</span>
          </SelectPayment>
        </PaymentGroup>
      </Payment>
    </>
  )
}
