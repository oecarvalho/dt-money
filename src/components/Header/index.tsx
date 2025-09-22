import Logo from '../../assets/images/Logo.svg'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styled'

export function Header(){
    return(
    <HeaderContainer>
        <HeaderContent>
            <img src={Logo} alt="" />

            <NewTransactionButton>Nova Transação</NewTransactionButton>
        </HeaderContent>
    </HeaderContainer>
    )
}