import { InputHTMLAttributes } from 'react'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
  name: string
  width?: string
}

export function Input({ optional = false, width, ...props }: InputProps) {
  return (
    <Container width={width}>
      <input {...props} />
      {optional && <span>Opcional</span>}
    </Container>
  )
}
