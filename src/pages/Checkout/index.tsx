import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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
import { useLocation } from '../../hooks/useLocation'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

const formConfirmAddressValidationSchema = zod.object({
  zipcode: zod.string().min(6, 'No mínimo 6 caracteres.'),
  address: zod.string(),
  number: zod.string(),
  complement: zod.string().optional(),
  district: zod.string(),
  city: zod.string(),
  state: zod.string(),
})

export type DeliveryAddressData = zod.infer<
  typeof formConfirmAddressValidationSchema
>

export function Checkout() {
  const { cart, totalProducts, handleConfirmOrder } = useCart()
  const { address, setAddress } = useLocation()

  const deliveryAddressForm = useForm<DeliveryAddressData>({
    resolver: zodResolver(formConfirmAddressValidationSchema),
    defaultValues: {
      address: address.logradouro,
      city: address.localidade,
      zipcode: address.cep,
      district: address.bairro,
      complement: address.complemento,
      state: address.uf,
    },
  })

  const { handleSubmit, reset, setValue, watch } = deliveryAddressForm

  useEffect(() => {
    if (address) {
      setValue('address', address.logradouro)
      setValue('city', address.localidade)
      setValue('zipcode', address.cep)
      setValue('district', address.bairro)
      setValue('complement', address.complemento)
      setValue('state', address.uf)
    }
  }, [address, setValue])

  function handleConfirmAddress(data: DeliveryAddressData) {
    handleConfirmOrder(data)
  }

  const zipcode = watch('zipcode')

  useEffect(() => {
    if (zipcode && zipcode.length > 7) {
      api.get(`${zipcode}/json`).then(({ data }) => {
        setAddress(data)
      })
    }
  }, [zipcode, setAddress])

  return (
    <Container onSubmit={handleSubmit(handleConfirmAddress)}>
      <AddressAside>
        <div>
          <h2>Complete seu pedido</h2>

          <FormProvider {...deliveryAddressForm}>
            <FormPayment />
          </FormProvider>
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
