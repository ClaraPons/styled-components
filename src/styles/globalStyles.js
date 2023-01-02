import { createGlobalStyle } from 'styled-components';
import { background } from './colors';
 
const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    background: ${background};
    font-family:  Open-Sans, Helvetica, Sans-Serif;

  }
`;
 
export default GlobalStyle;