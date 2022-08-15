import { HeaderContainer } from './styles'

import logoImg from '../../assets/logo.svg'
import effectLeftImg from '../../assets/effect-left.svg'
import effectRightImg from '../../assets/effect-right.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={effectLeftImg}
        alt="linhas de variação de cores azuis imitando código de programação"
      />
      <div>
        <img src={logoImg} alt="" />
        <span>Github Blog</span>
      </div>
      <img
        src={effectRightImg}
        alt="linhas de variação de cores azuis imitando código de programação"
      />
    </HeaderContainer>
  )
}
