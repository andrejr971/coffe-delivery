import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import theme from '../../styles/theme'
import { Button } from '../Button'
import {
  AmountToCart,
  Cart,
  Categories,
  Container,
  Description,
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
  name,
  categories,
  description,
  price,
  thumbnailUrl,
}: CardProps) {
  const [amount, setAmount] = useState(1)

  function handleUpdateAmount(type: 'add' | 'remove') {
    if (type === 'remove') {
      if (amount <= 1) return

      setAmount(amount - 1)
    } else {
      setAmount(amount + 1)
    }
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

          <Button size="small">
            <ShoppingCart size={24} weight="fill" />
          </Button>
        </Cart>
      </Footer>
    </Container>
  )
}
