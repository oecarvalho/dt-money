import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, CLoseButton, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {

    const {register, handleSubmit, formState: {isSubmitting}, control} = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema)
    })

    function handleCreateNewTransaction(data: NewTransactionFormInputs){
        console.log(data)
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CLoseButton>
                    <X size={24}/>
                </CLoseButton>

                <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input 
                    type="text" 
                    placeholder='Descrição' 
                    required
                    {...register('description')}
                    />
                    <input 
                    type="number" 
                    placeholder='Preço' 
                    required
                    {...register('price', {valueAsNumber: true})}
                    />
                    <input 
                    type="text" 
                    placeholder='Categoria' 
                    required
                    {...register('category')}        
                    />

                    <Controller
                        control={control}
                        name= "type"
                        render={({field})=>{

                            return(
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton variant='income' value='income'>
                                        <ArrowCircleUp size={24}/>
                                        Entrada
                                    </TransactionTypeButton>

                                    <TransactionTypeButton variant='outcome' value='outcome'>
                                        <ArrowCircleDown size={24}/>
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />

                    <button type='submit' disabled={isSubmitting}>Cadastrar</button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}