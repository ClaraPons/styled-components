import styled from 'styled-components'
import { background, green, lighterGreen, text, title } from '../styles/colors'
import {large, small } from '../styles/padding'

const Container = styled.div`
    max-width: 45.5%;
    height: auto;
    background: ${green};   
`
const Img = styled.img`
    width: ${props => props.width};
    opacity: 0.6;

    :hover{
        opacity: 1;
    }
`

const ImageBloc = ({img, width, widthBox}) => {
  return (
      <>
      <Container>
        <Img src={img} width={width} />
      </Container>
      </>
)
}

export default ImageBloc