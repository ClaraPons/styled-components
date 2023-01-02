import styled from 'styled-components'
import { green, lighterBackground, text } from '../styles/colors'
import { medium, small } from '../styles/padding'

const Container = styled.div`
    counter-reset: counter;
    display: flex;
    gap: 2vw;
    padding-bottom: 20px;
`
const Title = styled.h2`
    :before{
        content: '${props => props.before}';
        color: ${green}
    }
    color: white;
    font-size: 25px;
    text-decoration: none;
`

const Separator = styled.div `
    width: 30vw;
    background: ${lighterBackground};
    height: 0.1vh;
    margin-top: 34px;
`

const SectionTitle = ({children, before}) => {
  return (
      <Container>
        <Title before={before}>{children}</Title>  
        <Separator/> 
      </Container>
)
}

export default SectionTitle