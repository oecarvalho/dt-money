import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input{
        flex: 1;
        border-radius: 6px;
        border: 0;
        background-color: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-300']};
        padding: 1rem;

        &::placeholder{
            color: ${props => props.theme['gray-500']};
        }
    }

    button{
        display: flex;
        align-items: center;
        gap: 12px;
        color: ${props => props.theme['green-500']};
        
        padding: 1rem;
        background: transparent;
        border: 1px solid ${props => props.theme['green-300']};
        font-weight: bold;
        border-radius: 6px;

        &:hover{
            background-color: ${props => props.theme['green-500']};
            color: ${props => props.theme['white']};
            border-color: ${props => props.theme['green-500']};
            transition: .3s;
        }
    }
`