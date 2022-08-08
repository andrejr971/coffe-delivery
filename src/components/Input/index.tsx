import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
  name: string
  width?: string
}

export function Input({ optional = false, width, name, ...props }: InputProps) {
  const { register } = useFormContext()

  return (
    <Container width={width}>
      <input {...register(name)} {...props} />
      {optional && <span>Opcional</span>}
    </Container>
  )
}
