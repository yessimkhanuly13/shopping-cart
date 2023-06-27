import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Hello, from App <a href="/profile">profile </a></h1>
    </div>
  );
}

export default App;
