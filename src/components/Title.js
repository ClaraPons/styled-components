import styled from 'styled-components'
import { green, title } from '../styles/colors'
import { medium, small } from '../styles/padding'

const Title = styled.h1`
    color: ${props => props.color || 'white'};
    font-size: 5vw;
    margin: 15px 0px;
`

export default Title