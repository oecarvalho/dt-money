import Logo from '../../assets/images/Logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styled'
import * as Dialog from '@radix-ui/react-dialog'

export function Header(){
    return(
    <HeaderContainer>
        <HeaderContent>
            <img src={Logo} alt="" />

            <Dialog.Root>
                <Dialog.DialogTrigger asChild>
                    <NewTransactionButton>Nova Transação</NewTransactionButton>
                </Dialog.DialogTrigger>

                <NewTransactionModal/>
            </Dialog.Root>
        </HeaderContent>
    </HeaderContainer>
    )
}