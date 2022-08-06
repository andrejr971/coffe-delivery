import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import theme from '../../styles/theme'
import { Button } from '../Button'
import {
  AmountToCart,
  Badge,
  Cart,
  Categories,
  Container,
  Description,
  DivAddCart,
  Footer,
  ImageCoffee,
  Price,
  Tag,
  Title,
} from './styles'

interface CardProps {
  name: string
  id: number
  description: string
  thumbnailUrl: string
  price: number
  categories: {
    id: number
    name: string
  }[]
}

export function Card({
  id,
  name,
  categories,
  description,
  price,
  thumbnailUrl,
}: CardProps) {
  const { addToCart, cart } = useCart()

  const amountInCart = cart && cart.find((item) => item.id === id)

  const [amount, setAmount] = useState(
    (amountInCart && amountInCart.amount) || 1,
  )

  function handleUpdateAmount(type: 'add' | 'remove') {
    if (type === 'remove') {
      if (amount <= 0) return

      setAmount(amount - 1)
    } else {
      setAmount(amount + 1)
    }
  }

  function handleAddToCart() {
    addToCart({
      id,
      amount,
    })
  }

  return (
    <Container>
      <ImageCoffee src={`${thumbnailUrl}`} alt={name} />

      <Categories>
        {categories.map((category) => (
          <Tag key={category.id}>{category.name}</Tag>
        ))}
      </Categories>

      <Title>{name}</Title>
      <Description>{description}</Description>

      <Footer>
        <Price>
          <span>R$</span>
          <strong>
            {price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              useGrouping: false,
            })}
          </strong>
        </Price>

        <Cart>
          <AmountToCart>
            <button onClick={() => handleUpdateAmount('remove')}>
              <Minus size={16} color={theme.colors.purple} weight="bold" />
            </button>
            <div>{amount}</div>
            <button onClick={() => handleUpdateAmount('add')}>
              <Plus size={16} color={theme.colors.purple} weight="bold" />
            </button>
          </AmountToCart>

          <DivAddCart>
            <Button size="small" onClick={handleAddToCart}>
              <ShoppingCart size={24} weight="fill" />
            </Button>

            {amountInCart && amountInCart.amount > 0 && (
              <Badge>{amountInCart.amount}</Badge>
            )}
          </DivAddCart>
        </Cart>
      </Footer>
    </Container>
  )
}
