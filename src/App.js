import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleBottomNavigation from './HomeComponents/SimpleBottomNavigation';
import { Routes , Route } from 'react-router-dom';
import OwedComp from './Owe/HomeOwe';
import BankCalcHome from './BankCalc/BankCalcHome';
import Analytics from './Analytics/Analytics';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<OwedComp/>}/>
        <Route exact path="/bank-calc" element={<BankCalcHome/>}/>
        <Route exact path="/analytics" element={<Analytics/>}/>
      </Routes>

      <SimpleBottomNavigation/>
    </div>
  );
}

export default App;
