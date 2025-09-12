import './App.css';
import Footer from './components/Footer/Footer';
import GariComponent from './components/GariComponent/GariComponent';
import GariList from './components/GariList/GariList';
import Header from './components/Header/Header';
import OneGari from './components/OneGari/OneGari';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import DodajGarije from './pages/DodajGarije/DodajGarije';
import LogOut from './pages/LogOut';
import MojiGariji from './pages/MojiGariji';
import LogIn from './pages/LogIn/LogIn';
import Izmeni from './pages/Izmeni/Izmeni';
import Izbrisi from './pages/Izbrisi/Izbrisi';

function App() {
  return (
    <>
      <Router>
        <Header title="GariCuvari"></Header>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/MojiGariji/:id/Izmeni" element={<Izmeni />} />
          <Route path="/MojiGariji/:id/Izbrisi" element={<Izbrisi />} />
          <Route path="/DodajGarije" element={<DodajGarije />} />
          <Route path="/LogOut" element={<LogOut />} />
          <Route path="/MojiGariji" element={<MojiGariji />} />
        </Routes>
      </Router>

      {/* 
      <GariList></GariList>
      <OneGari userId={`${process.env.REACT_APP_USER_ID}`}></OneGari>
      <OneGari userId={`${process.env.REACT_APP_USER_ID2}`}></OneGari>
      */}
    </>
  );
}

export default App;
