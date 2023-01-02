import styled from 'styled-components'
import { background, green, lighterBackground, lighterGreen } from '../styles/colors'
import { small } from '../styles/padding'

const Outside = styled.div`
    position: relative;
    width: 6.5vmin;
    height: 6.5vmin;
    background: ${green};
    -webkit-clip-path: polygon(50% 10%, 85% 33%, 85% 73%, 53% 91%, 52% 91%, 15% 73%, 15% 33%);
    clip-path: polygon(50% 10%, 85% 33%, 85% 73%, 53% 91%, 52% 91%, 15% 73%, 15% 33%);
`

const Inside = styled.div`
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    color: ${green};
    text-align: center;
    font-weight: 700;
    padding-top: 22%;
    font-size: 18px;
    background: ${background};
    -webkit-clip-path: polygon(50% 10%, 85% 33%, 85% 73%, 53% 91%, 52% 91%, 15% 73%, 15% 33%);
    clip-path: polygon(50% 10%, 85% 33%, 85% 73%, 53% 91%, 52% 91%, 15% 73%, 15% 33%);

    :hover{
        background: ${lighterBackground};
        cursor: pointer
    }
`

const Logo = () => {
  return (
    <Outside>
        <Inside>
            B
        </Inside>
    </Outside>
)
}

export default Logo