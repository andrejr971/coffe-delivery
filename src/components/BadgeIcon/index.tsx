import React from 'react'
import { Container } from './styles'

interface BadgeIconProps {
  children: React.ReactNode
  color?: 'purple' | 'yellow_dark' | 'yellow' | 'gray'
}

export function BadgeIcon({ children, color = 'purple' }: BadgeIconProps) {
  return <Container color={color}>{children}</Container>
}
