import logo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'

export function Header () {
  return (
    <HeaderContainer> 
      <img src={logo} />
    </HeaderContainer>
  )
}