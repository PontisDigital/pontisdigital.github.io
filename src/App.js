import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import LoginPage from './pages/login';

function App() {
  return (
	  <Router>
		  <Routes>
			  <Route path="/" element={<Home/>}/>
			  <Route path="/login" element={<LoginPage/>}/>
		  </Routes>
	  </Router>
  );
}

export default App;
