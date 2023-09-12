import './App.css';
import Login from './Login';
import Signup from './Signup';
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Link to='/login'>LOGIN</Link>
      <Link to='/signup'>SIGN UP</Link>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
