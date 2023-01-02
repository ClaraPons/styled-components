import styled from 'styled-components'
import { background, green, lighterGreen, text, title } from '../styles/colors'
import {large, small } from '../styles/padding'

const Container = styled.ul`
    display: flex;
    padding:0px;
    width:20%;
    flex-wrap: wrap;
    flex-direction: column;
`

const Point = styled.li`
    :before {
        content: "▹ ";
        color: ${green};
        line-height: 12px;
    }

    color: ${text};
    list-style: none;
    font-size: 14px;
    padding-bottom: 10px;
`

const List = ({pointOne, pointTwo, pointThree}) => {
  return (
      <Container> 
          <Point>{pointOne}</Point>
          <Point>{pointTwo}</Point>
          <Point>{pointThree}</Point>
      </Container>
)
}

export default List