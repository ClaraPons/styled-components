import styled from 'styled-components'
import { background, green, lighterGreen, text, title, lighterBackground } from '../styles/colors'
import {large, small } from '../styles/padding'
import ImageBloc from './ImageBloc'
import SectionTitle from './SectionTitle'
import img1 from '../img/img1.png'
import GreenTitle from './GreenTitle'
import Link from './Link'
import ParagraphBlueBg from './ParagraphBlueBg'

const Container = styled.section`
    width: 80%;
    padding-left: ${large};
    padding-top: 70px;
`

const Grid = styled.div`
    display: flex;
`

const Section = styled.div `
    text-align: right;
    width: 30%;

`

const WorkBox = () => {
  return (
      <Container>
          <SectionTitle before={'03. '}>Some Things I've Built</SectionTitle>
          <Grid>
            <ImageBloc img={img1} width={'520px'} />
            <Section>
                <GreenTitle>Featured Project</GreenTitle>
                <Link>Halcyon Theme</Link>
                <ParagraphBlueBg >A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</ParagraphBlueBg>
            </Section>
          </Grid>
      </Container>
)
}

export default WorkBox