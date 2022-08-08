import { Minus, Plus, ShoppingCart, Trash } from 'phosphor-react'
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
  const { addToCart, removeToCart, increment, decrement, cart } = useCart()

  const productInCart = cart && cart.find((item) => item.id === id)

  const [amount, setAmount] = useState(
    (productInCart && productInCart.quantity) || 1,
  )

  function handleUpdateAmount(type: 'add' | 'remove') {
    if (type === 'remove') {
      if (amount <= 0) return

      setAmount(amount - 1)

      if (productInCart) {
        decrement(id)
      }
    } else {
      setAmount(amount + 1)

      if (productInCart) {
        increment(id)
      }
    }
  }

  function handleAddToCart() {
    addToCart({
      id,
      name,
      price,
      thumbnailUrl,
      quantity: amount,
    })
  }

  function handleRemoveToCart() {
    removeToCart(id)

    setAmount(1)
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
            {productInCart ? (
              <Button size="small" onClick={handleRemoveToCart}>
                <Trash size={24} weight="fill" />
              </Button>
            ) : (
              <Button size="small" onClick={handleAddToCart}>
                <ShoppingCart size={24} weight="fill" />
              </Button>
            )}

            {productInCart && productInCart.quantity > 0 && (
              <Badge>{productInCart.quantity}</Badge>
            )}
          </DivAddCart>
        </Cart>
      </Footer>
    </Container>
  )
}
