import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export function DeafultLayout() {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  )
}