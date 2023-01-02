import styled from 'styled-components'
import { background, green, lighterGreen } from '../styles/colors'
import { medium, small } from '../styles/padding'

const Btn = styled.button`
    background: ${background};
    border: 1px solid ${green};
    padding: ${small} ${medium};
    color: ${green};
    border-radius: 5px;

    :hover{
        background: ${lighterGreen};
        cursor: pointer
    }
`

const Button = ({children}) => {
  return (
    <Btn type="button">{children}</Btn>
)
}

export default Button