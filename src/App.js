import './App.css';
import Contains from './container';
import Header from './header/header';
import Logout from './logout';
import Carts from './header/cart';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
function App() {
  const [CntMob,setCntMob]=useState(0);
  const [CntLap,setCntLap]=useState(0);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path='/webpg1' element={<Contains CntMob={CntMob} setCntMob={setCntMob} CntLap={CntLap} setCntLap={setCntLap}/>} />
        <Route path='/' element={<Contains CntMob={CntMob} setCntMob={setCntMob} CntLap={CntLap} setCntLap={setCntLap}/>} />
        <Route path='/contains' element={<Contains CntMob={CntMob} setCntMob={setCntMob} CntLap={CntLap} setCntLap={setCntLap}/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/cart' element={<Carts CntMob={CntMob} CntLap={CntLap}/>} />
      </Routes>
    </Router>
      
  );
}

export default App;
