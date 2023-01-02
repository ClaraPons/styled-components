import styled from 'styled-components'
import { background, green, lighterGreen, text, title } from '../styles/colors'
import {large, small } from '../styles/padding'
import SectionTitle from './SectionTitle'

const Container = styled.div`
    width: 80%;
    padding-left: ${large};
    padding-top: 70px;
`

const WorkBox = () => {
  return (
      <Container>
          <SectionTitle before={'02. '}>Where I’ve Worked</SectionTitle>
      </Container>
)
}

export default WorkBox