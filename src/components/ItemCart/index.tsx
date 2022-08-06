import { Minus, Plus, Trash } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import theme from '../../styles/theme'
import { Button } from '../Button'
import {
  AmountToCart,
  Container,
  Div,
  Name,
  Options,
  Price,
  Product,
} from './styles'

interface ItemCartProps {
  id: number
  name: string
  amount: number
  price: number
  thumbnailUrl: string
}

export function ItemCart({
  id,
  name,
  amount,
  price,
  thumbnailUrl,
}: ItemCartProps) {
  const { addToCart, removeToCart } = useCart()

  function handleUpdateAmount(type: 'add' | 'remove') {
    if (type === 'remove') {
      if (amount <= 0) return

      addToCart({
        id,
        amount: amount - 1,
      })
    } else {
      addToCart({
        id,
        amount: amount + 1,
      })
    }
  }

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
              <button onClick={() => handleUpdateAmount('remove')}>
                <Minus size={16} color={theme.colors.purple} weight="bold" />
              </button>
              <div>{amount}</div>
              <button onClick={() => handleUpdateAmount('add')}>
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
        {(price * amount).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          style: 'currency',
          currency: 'BRL',
        })}
      </Price>
    </Container>
  )
}
