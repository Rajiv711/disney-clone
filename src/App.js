
import { BrowserRouter as Router ,Switch  ,Route, Routes ,Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';



function App() {
  return (
    
    <div className="App">
      <Router>
        <Header/>
      <Routes>
        <Route  path="/" element={<Login/>}>          
        </Route>
        <Route path="/home" element={<Home/>}/>
      </Routes>  
      </Router>
    </div>
  );
}

export default App;
