import logo from './logo.svg';
import './App.css';
import Qualifications from './Pages/Qualifications';
import AboutMe from './Pages/AboutMe';
import Skills from './Pages/Skills';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="AboutMe" element={<AboutMe/>}/>
          <Route path="Qualifications" element={<Qualifications/>}/>
          <Route path="Skills" element={<Skills/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
