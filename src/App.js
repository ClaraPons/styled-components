import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import GlobalStyle from './styles/globalStyles';
import PresentationBox from './components/PresentationBox'
import AboutMeBox from './components/AboutMeBox'
import WorkBox from './components/WorkBox';
import ProjectBox from './components/ProjectBox'

const App = () => {
  return (
    <>
    <GlobalStyle/>
    <Header></Header>
    <PresentationBox/>
    <AboutMeBox/>
    <WorkBox/>
    <ProjectBox/>
    </>

  )
}

export default App;
