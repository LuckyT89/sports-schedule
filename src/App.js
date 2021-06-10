import './App.css';
import Admin from './components/Admin/Admin';
import AdminCard from './components/AdminCard/AdminCard';
import Home from './components/Home/Home';
import HomeCard from './components/HomeCard/HomeCard';

import { useState, useEffect } from 'react';

function App() {

  
  useEffect(() => {
    fetch('http://localhost:3000/toys')
      .then(res => res.json())
      .then(toys => console.log(toys))
  }, []);



  return (
    <div>
      <Home />
      <HomeCard />
      <Admin />
      <AdminCard />
    </div>
  );
}

export default App;
