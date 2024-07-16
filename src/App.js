import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Details from './Component/Details';
import Viewall from './Component/Viewall';
import Search from './Component/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Details />} />
        <Route path='/search' element={<Search />} />
        <Route path='/viewall' element={<Viewall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
