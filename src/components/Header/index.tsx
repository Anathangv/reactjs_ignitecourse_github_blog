import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import leftEffect from '../../assets/leftSideEffectHeader.svg'
import rightEffect from '../../assets/rightSideEffectHeader.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={leftEffect} alt="" />
      <img src={logo} alt="" />
      <img src={rightEffect} alt="" />
    </HeaderContainer>
  )
}
