import { X } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useLocation } from '../../hooks/useLocation'
import { api } from '../../services/api'
import { Button } from '../Button'
import { Input } from '../Input'

import { Container, Content, Form, Header } from './styles'

type ILocation = {
  code: string
}

interface ModalLocationProps {
  isVisible: boolean
  onClose: () => void
}

const searchLocationValidationSchema = zod.object({
  code: zod.string().min(6, 'No mínimo 6 caracteres.'),
})

export function ModalLocation({ isVisible, onClose }: ModalLocationProps) {
  const formSearchLocation = useForm<ILocation>({
    defaultValues: {
      code: '',
    },
    resolver: zodResolver(searchLocationValidationSchema),
  })

  const { setLocation, setAddress } = useLocation()

  const { handleSubmit, reset } = formSearchLocation

  async function handleSearchLocation({ code }: ILocation) {
    const { data } = await api.get(`${code}/json`)

    const address = `${data.localidade}, ${data.uf}`

    setLocation(address)
    setAddress(data)

    const addressStorageParse = JSON.stringify(data)
    localStorage.setItem('@coffee-delivery:address-1.0.0', addressStorageParse)

    reset()
    onClose()
  }

  return (
    <Container isVisible={isVisible}>
      <Content>
        <Header>
          <div>
            <strong>Onde você está?</strong>
            <p>
              Dessa forma você terá acesso aos produtos e ofertas da sua região.
            </p>
          </div>
          <Button size="small" onClick={onClose}>
            <X size={24} weight="bold" />
          </Button>
        </Header>

        <Form onSubmit={handleSubmit(handleSearchLocation)}>
          <FormProvider {...formSearchLocation}>
            <Input name="code" placeholder="CEP" />
            <Button size="full">Buscar</Button>
          </FormProvider>
        </Form>
      </Content>
    </Container>
  )
}
