
import { BrowserRouter as Router ,Switch  ,Route, Routes ,Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';



function App() {
  return (
    
    <div className="App">
      <Router>
        <Header/>
      <Routes>
        <Route exact path="/" element={<Login/>}>          
        </Route>
      </Routes>  
      </Router>
    </div>
  );
}

export default App;
