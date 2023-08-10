import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Screens/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Navbar></Navbar>}>
          <Route index element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
