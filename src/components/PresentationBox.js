import styled from 'styled-components'
import { background, green, lighterGreen, text, title } from '../styles/colors'
import {large, small } from '../styles/padding'
import Button from './Button'
import GreenTitle from './GreenTitle'
import Paragraph from './Paragraph'
import Title from './Title'

const Container = styled.section`
    width: 80%;
    padding-left: ${large};
    padding-top: 70px;
`

const PresentationBox = ({children}) => {
  return (
      <Container>   
        <GreenTitle>Hi, my name is</GreenTitle>
        <Title color={`${title}`} >Brittany Chiang.</Title>
        <Title color={`${text}`} >I build things for the web.</Title>
        <Paragraph>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <a href='#'>Upstatement</a>.</Paragraph>
        <Button>Check out my course !</Button>
      </Container>
)
}

export default PresentationBox