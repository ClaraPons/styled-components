import styled from 'styled-components'
import { green, lighterBackground, text } from '../styles/colors'
import { medium, small } from '../styles/padding'

const Text = styled.p`
    color: ${text};
    line-height: 25px;
    background: ${lighterBackground};
    padding: ${small};
    position: relative;

    a{
        color: ${green};
        text-decoration:none;
    }
`

const Paragraph = ({children}) => {
  return (
      <Text>{children}</Text>   
)
}

export default Paragraph