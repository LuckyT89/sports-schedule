import './App.css';
import Admin from './components/Admin/Admin';
import AdminCard from './components/AdminCard/AdminCard';
import Home from './components/Home/Home';
import HomeCard from './components/HomeCard/HomeCard';

import { useState, useEffect } from 'react';

function App() {

  const [games, setGames] = useState([]);
  
  // Initial GET request to grab all the games and set state
  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then(res => res.json())
      .then(resGames => {
        setGames(resGames);
      })
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
