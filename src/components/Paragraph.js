import styled from 'styled-components'
import { green, text } from '../styles/colors'
import { medium, small } from '../styles/padding'

const Text = styled.p`
    color: ${text};
    width: 75%;
    line-height: 28px;
    background: '${props => props.background || ''}'

    a{
        color: ${green};
        text-decoration:none;
    }
`

const Paragraph = ({children, background}) => {
  return (
      <Text background={background}>{children}</Text>   
)
}

export default Paragraph