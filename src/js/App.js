import '../css/App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import SkillSet from './components/SkillSet';
import AboutMe from './components/AboutMe';
import CatllToAction from './components/CatllToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Certificates />
      <Projects />
      <SkillSet />
      <AboutMe />
      <CatllToAction />
      <Footer />
    </>
  );
}

export default App;
