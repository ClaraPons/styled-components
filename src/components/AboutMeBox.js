import styled from 'styled-components'
import {large, small } from '../styles/padding'
import Paragraph from './Paragraph'
import SectionTitle from './SectionTitle'
import List from './List'
import ImageBloc from './ImageBloc'

const Container = styled.section`
    width: 90%;
    padding-left: ${large};
    padding-top: 100px;
    display: grid;
    align-items: center; 
    grid-template-columns: 1fr 1fr;
`

const TextContainer = styled.article`
    display: flex;
    flex-direction: column;
`

const ListContaint = styled.div `
    display: flex;
    gap:50px;
`

const PresentationBox = ({children}) => {
  return (
      <Container>   
          <TextContainer>
            <SectionTitle before='01. '>About Me</SectionTitle>
            <Paragraph >Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</Paragraph>
            <Paragraph>Fast-forward to today, and I’ve had the privilege of working at <a href='#'>an advertising agency, a start-up, a huge corporation, and a student-led design studio.</a> My main focus these days is building accessible, inclusive products and digital experiences at <a href='#'>Upstatement</a> for a variety of clients.</Paragraph>
            <Paragraph>I also recently <a href='#'>launched a course</a> that covers everything you need to build a web app with the Spotify API using Node & React.</Paragraph>
            <Paragraph>Here are a few technologies I’ve been working with recently:</Paragraph>
            <ListContaint>
                <List pointOne={'JavaScript (ES6+)'} pointTwo={'React'} pointThree={'Node.js'}/>
                <List pointOne={'TypeScript'} pointTwo={'Eleventy'} pointThree={'WordPress'}/>
            </ListContaint>
          </TextContainer>
          <ImageBloc img={'https://brittanychiang.com/static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif'} width={'290px'} />
      </Container>
)
}

export default PresentationBox