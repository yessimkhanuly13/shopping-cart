import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/product"><button className='btn-start'>Get started</button></Link>
    </div>
  );
}

export default App;
