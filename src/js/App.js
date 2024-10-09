import '../css/App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import SkillSet from './components/SkillSet';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import CatllToAction from './components/CatllToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <SkillSet />
      <Projects />
      <AboutMe />
      <CatllToAction />
      <Footer />
    </>
  );
}

export default App;
