
import './App.css';
import Hello from './components/Hello';
import NavBar from './components/NavBar';
import me from './pictures/me.jpeg'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hello myPicture= {me} />
    </div>
  );
}

export default App;
