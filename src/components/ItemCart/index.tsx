import { Minus, Plus, Trash } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import theme from '../../styles/theme'
import { Button } from '../Button'
import {
  Container,
  Div,
  Name,
  Options,
  Price,
  Product,
  AmountToCart,
} from './styles'

interface ItemCartProps {
  id: number
  name: string
  quantity: number
  price: number
  thumbnailUrl: string
}

export function ItemCart({
  id,
  name,
  quantity,
  price,
  thumbnailUrl,
}: ItemCartProps) {
  const { decrement, increment, removeToCart } = useCart()

  function handleRemoveToCart() {
    removeToCart(id)
  }

  return (
    <Container>
      <Div>
        <img src={thumbnailUrl} alt={name} />

        <Product>
          <Name>{name}</Name>

          <Options>
            <AmountToCart>
              <button onClick={() => decrement(id)}>
                <Minus size={16} color={theme.colors.purple} weight="bold" />
              </button>
              <div>{quantity}</div>
              <button onClick={() => increment(id)}>
                <Plus size={16} color={theme.colors.purple} weight="bold" />
              </button>
            </AmountToCart>

            <Button size="small" variant="light" onClick={handleRemoveToCart}>
              <Trash color={theme.colors.purple} size={16} />
              <span>Remover</span>
            </Button>
          </Options>
        </Product>
      </Div>

      <Price>
        {(price * quantity).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          style: 'currency',
          currency: 'BRL',
        })}
      </Price>
    </Container>
  )
}
