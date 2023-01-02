import styled from 'styled-components'
import { background, green } from '../styles/colors'
import { large, medium, small } from '../styles/padding'
import Logo from '../components/Logo'
import Button from '../components/Button'



const BoxContainer = styled.header`
    background-color: ${background};
    padding: ${medium};
    display: flex;
    justify-content: space-between;
    align-items: center;
    counter-reset: counter;
`

const Nav = styled.nav`
    display: flex;
    gap: 23px;
    align-items: center;
`

const Link = styled.a`
    :before{
        counter-increment: counter;
        content: "0" counter(counter) ". ";
        color: ${green}
    }
    :hover{
        color: ${green}
    }
    color: white;
    font-size: 13px;
    text-decoration: none;
`


const Header = () => {
  return (
    <BoxContainer>
        <Logo/>
        <Nav>
            <Link href='#'>About</Link>
            <Link href='#'>Experience</Link>
            <Link href='#'>Work</Link>
            <Link href='#'>Contact</Link>
            <Button>Resume</Button>
        </Nav>
    </BoxContainer>
  )
}

export default Header