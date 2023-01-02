import styled from 'styled-components'
import { green, lighterBackground, text } from '../styles/colors'
import { medium, small } from '../styles/padding'


const Link = styled.a`
    color: white;
    font-size: 20px;
    text-decoration: none;
    font-weight: 900;

    :hover{
        color: ${green}
    }
`

const SectionTitle = ({children}) => {
  return (
    <Link href='#'>{children}</Link>  
)
}

export default SectionTitle