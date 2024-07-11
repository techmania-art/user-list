import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Details from './Component/Details';
import Viewall from './Component/Viewall';
import Search from './Component/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Details/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/viewall' element={<Viewall/>}/>
      </Routes>
    </Router>
  );
}

export default App;
