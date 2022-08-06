import React, { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'full' | 'small'
}

export function Button({
  children,
  variant = 'primary',
  size = 'full',
  ...props
}: ButtonProps) {
  return (
    <Container size={size} variant={variant} {...props}>
      {children}
    </Container>
  )
}
