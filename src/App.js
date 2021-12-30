
import './App.css';
import Aos from 'aos'
import "aos/dist/aos.css";
import Hello from './components/Hello';
import NavBar from './components/NavBar';
import About from './components/About';
import Title from './components/Title';
import me from './pictures/me.jpeg'
import { useEffect } from 'react';
import ProjSection from './components/ProjSection';

function App() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="App">
      <NavBar/>
      <Hello myPicture= {me} />
      <About effect='fade-up'/>

      {/* Projects Section */}
      <Title titleText="Projects..." effect='fade-left'/>
      <ProjSection projectTitle="Exemplo" 
      projectLink={'https://michalsnik.github.io/aos/'}
      effect={'fade-down'}/>
      <ProjSection projectTitle="Exemplo" 
      projectLink={'https://michalsnik.github.io/aos/'}
      effect={'fade-down'}/>
      <ProjSection projectTitle="Exemplo" 
      projectLink={'https://michalsnik.github.io/aos/'}
      effect={'fade-down'}/>

      {/* Expirience Section */}
      <Title titleText="Experience..." effect='fade-left'/>
    </div>
  );
}

export default App;
