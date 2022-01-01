
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
import Experience from './components/Experience';
import Courses from './components/Courses';
import Knowledge from './components/Knowledge';
import Shopify from './pictures/shopify.png'
import Contact from './components/Contact';

function App() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="App">
      <NavBar/>
      <Hello myPicture= {me} />
      <About effect='fade-up' id='about'/>

      {/* Projects Section */}
      <Title titleText="Projects" effect='fade-left'/>
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
      <Title titleText="Experience" effect='fade-left'/>
      <Experience
        year={2021}
        title={'Econverse'}
        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia laborum fugiat earum in natus temporibus consectetur, magnam eum hic voluptas perferendis officia tenetur, provident sapiente necessitatibus quos. Veniam, voluptatum!'}
      />

      <Experience
        year={2020}
        title={'Econverse'}
        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia laborum fugiat earum in natus temporibus consectetur, magnam eum hic voluptas perferendis officia tenetur, provident sapiente necessitatibus quos. Veniam, voluptatum!'}
      />

      <Experience
        year={2019}
        title={'Econverse'}
        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia laborum fugiat earum in natus temporibus consectetur, magnam eum hic voluptas perferendis officia tenetur, provident sapiente necessitatibus quos. Veniam, voluptatum!'}
      />

      {/* Courses */}
      <Title titleText='Courses' effect='fade-left'/>
      <Courses 
      title={"JavaScript"}
      year={2020}
      description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia laborum fugiat earum in natus temporibus consectetur, magnam eum hic voluptas perferendis officia tenetur, provident sapiente necessitatibus quos. Veniam, voluptatum!'}/>

      <Courses 
      title={"JavaScript"}
      year={2020}
      description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia laborum fugiat earum in natus temporibus consectetur, magnam eum hic voluptas perferendis officia tenetur, provident sapiente necessitatibus quos. Veniam, voluptatum!'}/>

      <Courses 
      title={"JavaScript"}
      year={2020}
      description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia laborum fugiat earum in natus temporibus consectetur, magnam eum hic voluptas perferendis officia tenetur, provident sapiente necessitatibus quos. Veniam, voluptatum!'}/>

      {/* Technologies */}
      <Title titleText='Knowleadges' effect='fade-left'/>

      <Knowledge title={'Shopify'}
      description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia laborum fugiat earum in natus temporibus consectetur, magnam eum hic voluptas perferendis officia tenetur, provident sapiente necessitatibus quos. Veniam, voluptatum!'}
      icon={Shopify}
      />

      <Knowledge title={'Shopify'}
      description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia laborum fugiat earum in natus temporibus consectetur, magnam eum hic voluptas perferendis officia tenetur, provident sapiente necessitatibus quos. Veniam, voluptatum!'}
      icon={Shopify}
      />
    
      {/* Contact */}
      <Contact/>
    </div>

  );
}

export default App;
