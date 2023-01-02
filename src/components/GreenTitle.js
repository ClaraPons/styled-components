import styled from 'styled-components'
import { green } from '../styles/colors'
import { medium, small } from '../styles/padding'

const Title = styled.h4`
    color: ${green};
`

const GreenTitle = ({children}) => {
  return (
      <Title>{children}</Title>   
)
}

export default GreenTitle